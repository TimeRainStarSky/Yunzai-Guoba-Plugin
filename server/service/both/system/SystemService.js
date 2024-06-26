import os from 'os'
import fs from 'fs'
import path from 'path'
import {Service, GuobaError} from '#guoba.framework';
import {mkdirSync} from '#guoba.utils'
import {diskInfo} from '#guoba.libs'
import {liteToken} from './model/tokens.js'

const {GI} = Guoba.createImport(import.meta.url)
const {useMenuList} = await GI('./model/menus/index.js')

export class SystemService extends Service {

  constructor(app) {
    super(app)
  }

  async queryMenus() {
    return await useMenuList()
  }

  getLiteToken() {
    return liteToken
  }

  /**
   * 创建目录
   * @param parentPath
   * @param dirName
   */
  createDir(parentPath, dirName) {
    let joinPath = path.join(parentPath, dirName)
    if (fs.existsSync(joinPath)) {
      throw new GuobaError('目录已存在！')
    }
    return mkdirSync(joinPath)
  }

  /**
   * 获取文件系统树根路径
   * @returns {Promise}
   */
  async getFsTreeRoot() {
    let platform = os.platform().toLowerCase()
    if (platform === 'linux') {
      return [
        {title: '/', path: '/', isLeaf: false, children: null},
      ]
    } else {
      let drives = await diskInfo.getDrives()
      return drives.map(drive => {
        let title = drive.volumeName ? `${drive.volumeName}（${drive.mounted}）` : drive.mounted
        return {
          title: title,
          path: drive.mounted + '\\',
          isLeaf: false,
          children: null,
        }
      })
    }
  }

  /**
   * 获取文件系统树根路径
   * @param parentPath 父级路径
   * @param onlyDir 是否只返回目录
   * @returns {Promise}
   */
  async getFsTreeChildren(parentPath, onlyDir = true) {
    if (!fs.existsSync(parentPath)) {
      throw new GuobaError('目录不存在！')
    }
    let children = []
    let childNames = fs.readdirSync(parentPath)
    for (let childName of childNames) {
      let child = {
        title: childName,
        path: path.join(parentPath, childName),
        isLeaf: false,
        children: null,
      }
      let stat
      try {
        stat = fs.statSync(child.path)
      } catch (e) {
        // 无权限的直接跳过
        // console.error(e.message || e)
        continue
      }
      if (stat.isFile()) {
        if (onlyDir) {
          continue
        }
        child.isFile = true
        child.isLeaf = true
      }
      children.push(child)
    }
    return children
  }

}