import fs from 'fs'
import path from 'path'
import {exec} from 'child_process'

/**
 * git工具类
 */
export default class GitTools {

  static CHECK_STATUS = {
    ERROR: -1,
    OK: 0,
    NOT_EXIST: 1,
    NOT_MATCH: 2,
  }

  static CLONE_STATUS = {
    ERROR: -1,
    OK: 0,
  }

  static PULL_STATUS = {
    ERROR: -1,
    UP_TO_DATE: 0,
  }

  /**
   * 当前仓库是否存在错误
   * @type {boolean}
   */
  repoIsError = false

  /**
   *
   * @param directory 本地目录
   * @param repository 仓库地址
   * @param options 配置
   */
  constructor(directory, repository, options) {
    this.name = path.basename(directory)
    this.directory = directory
    this.repository = repository

    this.options = Object.assign({}, {
      // 严格模式，如果仓库不存在或者不是指定仓库，会删除目录重新克隆
      strictMode: false,
      // 是否在初始化时立即克隆
      immediateClone: false,
    }, options)

    if (this.options.immediateClone) {
      this.init()
    }
  }

  async init() {
    // logger.debug(`[Guoba] 开始执行 "${this.name}" 仓库的初始化操作： ${this.directory} `)

    const checkRes = await this.checkRepo()
    if (checkRes === GitTools.CHECK_STATUS.NOT_EXIST) {
      // console.log('仓库不存在，开始克隆')
      const res = await this.cloneRepo()
      if (res.status === GitTools.CLONE_STATUS.ERROR) {
        logger.error(`[Guoba] 执行 "${this.name}" 仓库的clone操作时出现错误；stderr: ${res.stderr}`)
      }
      // console.log('克隆完成，耗时：' + res.timeMs + 'ms')
    } else if (checkRes === GitTools.CHECK_STATUS.NOT_MATCH) {
      if (this.options.strictMode) {
        logger.warn(`[Guoba] 检测到 "${this.name}" 仓库损坏，执行删除并重新克隆操作`)
        await this.forceReClone()
      } else {
        logger.error(`[Guoba] 检测到 "${this.name}" 仓库损坏，非严格模式下不执行任何操作`)
        this.repoIsError = true
      }
    } else if (checkRes === GitTools.CHECK_STATUS.OK) {
      const res = await this.pull()
      if (res.status === GitTools.PULL_STATUS.ERROR) {
        if (this.options.strictMode) {
          logger.warn(`[Guoba] 检测到 "${this.name}" 仓库损坏，执行删除并重新克隆操作`)
          await this.forceReClone()
        } else {
          logger.error(`[Guoba] 执行 "${this.name}" 仓库的pull操作时出现错误；stderr: ${res.stderr}`)
        }
      }
    }
  }

  async forceReClone() {
    const rmSync = fs.rmSync || fs.rmdirSync
    rmSync(this.directory, {recursive: true})
    const res = await this.cloneRepo()
    if (res.status !== GitTools.CLONE_STATUS.ERROR) {
      this.repoIsError = false
    } else {
      logger.warn(`[Guoba] 执行 "${this.name}" 仓库的强制重新Clone操作时出现错误，请手动删除 "${this.directory}" 目录并重启；stderr: ${res.stderr}`)
    }
    return res
  }

  /**
   * 检查仓库是否存在
   */
  async checkRepo() {
    const dirIsExist = fs.existsSync(this.directory)
    if (!dirIsExist) {
      return GitTools.CHECK_STATUS.NOT_EXIST
    }
    const gitIsExist = fs.existsSync(path.join(this.directory, '.git'))
    if (!gitIsExist) {
      return GitTools.CHECK_STATUS.NOT_MATCH
    }
    const res = await this.exec(`git -C ${this.directory} remote -v`)
    if (res.error) {
      throw new Error(res.stderr)
    }
    if (res.stdout.includes(this.repository)) {
      return GitTools.CHECK_STATUS.OK
    }
    return GitTools.CHECK_STATUS.NOT_MATCH
  }

  async cloneRepo() {
    const res = await this.execSingle('cloneRepo', `git clone --single-branch --depth=1 "${this.repository}" "${this.directory}"`)
    if (res.error) {
      return {
        ...res,
        status: GitTools.CLONE_STATUS.ERROR,
      }
    }
    return {
      ...res,
      status: GitTools.CLONE_STATUS.OK,
    }
  }

  async pull() {
    const res = await this.execSingle('pull', `git -C ${this.directory} pull`)
    if (res.error) {
      return {
        ...res,
        status: GitTools.PULL_STATUS.ERROR,
      }
    }
    return {
      ...res,
      status: GitTools.PULL_STATUS.UP_TO_DATE,
    }
  }

  /**
   * 执行单例任务
   * @param key
   * @param cmd
   */
  async execSingle(key, cmd) {
    let cacheKey = `execSingle_${key}`
    if (this[cacheKey]) {
      // console.log(`${key} 存在任务，等待任务完成`)
      return this[cacheKey]
    }
    this[cacheKey] = this.exec(cmd)
    const res = await this[cacheKey]
    this[cacheKey] = null
    return res
  }

  exec(cmd) {
    const beginTime = Date.now()
    return new Promise((resolve) => {
      exec(`${cmd}`, {
        windowsHide: true,
      }, (error, stdout, stderr) => {
        const timeMs = Date.now() - beginTime
        resolve({error, stdout, stderr, timeMs});
      });
    });
  }

}

