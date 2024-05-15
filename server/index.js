import path from "path";
import {GuobaApplication} from "#guoba.framework";
import {_paths, cfg, GuobaSupportMap, PluginsMap} from '#guoba.platform';
import {getWebAddress, isV3} from "#guoba.utils";
import {listen} from './helper/listen.js'
import chalk from 'chalk'

export async function createServer({isInit}) {
  const begin = Date.now()
  // 初始化
  PluginsMap.clear()
  GuobaSupportMap.clear()
  // 启动服务
  const application = await GuobaApplication.run({
    port: cfg.get('server.port'),
    staticPath: _paths.staticPath,
    componentPaths: [
      path.join(_paths.pluginRoot, 'server/interceptor'),
      path.join(_paths.pluginRoot, 'server/service', 'both'),
      path.join(_paths.pluginRoot, 'server/service', isV3 ? 'v3' : 'v2'),
      path.join(_paths.pluginRoot, 'server/controller'),
    ],
    preloads: [
      {
        code: `PRELOAD_JS`,
        hook: (req) => req.path === '/' || req.path === '/index.html',
        path: path.join(_paths.pluginRoot, 'server/preload/ConfigPreload.js'),
        staticPath: path.join(_paths.staticPath, 'index.html'),
      }
    ],
    decorators: [
      {
        path: path.join(_paths.pluginRoot, 'server/decorator/ReqDecorator.js'),
        args: [],
      }
    ],
    overrides: {
      listen: listen,
    }
  })
  const app = application.app
  const server = application.server
  // 首次启动输出提示信息
  if (isInit) {
    const tipText = `[Guoba] 启动成功 >_< 耗时: ${Date.now() - begin}ms`
    const hosts = getWebAddress(true)
    const maxLength = Math.max(30, ...hosts.map(host => host.length), tipText.length + 6) + 4;
    logger.mark('#'.repeat(maxLength))
    logger.mark(`# ${chalk.green(tipText)} #`)
    logger.info('# ' + chalk.green('登录地址：') + ' '.repeat(maxLength - 14) + ' #')
    for (let host of hosts) {
      logger.info('# ' + chalk.cyan(host) + ' '.repeat(maxLength - host.length - 4) + ' #')
    }
    logger.info('# ' + chalk.magenta('请妥善保管登陆地址，避免泄露！') + ' '.repeat(maxLength - 34) + ' #')
    logger.mark('#'.repeat(maxLength))
  }
  return {app, server}
}
