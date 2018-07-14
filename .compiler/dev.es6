import webpack from 'webpack'
import path from 'path'
import WebpackDevServer from 'webpack-dev-server'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack/config/webpack.cordova.config'
import logStats from './logStats'

let hotMiddleware

function startRenderer () {
  return new Promise((resolve) => {
    const compiler = webpack(config)
    hotMiddleware = webpackHotMiddleware(compiler, {
      log: false,
      heartbeat: 2500
    })

    compiler.hooks.compilation.tap(
      'compilation',
      compilation => {
        compilation.hooks.htmlWebpackPluginAfterEmit.tapAsync(
          'htmlWebpackPluginAfterEmit',
          (data, cb) => {
            hotMiddleware.publish({ action: 'reload' })
            cb()
          }
        )
      }
    )
    compiler.hooks.done.tap(
      'done',
      stats => {
        logStats('Dev Server', stats)
      }
    )

    const server = new WebpackDevServer(
      compiler,
      {
        contentBase: path.join(__dirname, '../'),
        quiet: true,
        before (app, ctx) {
          app.use(hotMiddleware)
          ctx.middleware.waitUntilValid(() => {
            resolve()
          })
        }
      }
    )

    server.listen(9080)
  })
}

startRenderer()
  .catch(
    e => {
      console.log(e)
    }
  )
