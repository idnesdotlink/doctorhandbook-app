import webpack from 'webpack'
import WebpackServe from 'webpack-serve'
import webpackCordovaConfig from './webpack/config/webpack.cordova.config'
import staticServer from './staticServer.es6'

const devServer = async function () {
  let server
  const compiler = webpack(webpackCordovaConfig)
  const options = {
    compiler: compiler,
    port: 9080,
    open: false
  }
  server = await WebpackServe({}, options)
  return server
}

const init = async function () {
  try {
    await staticServer()
    await devServer()
  } catch (error) {
    console.log(error)
  }
}

init()
