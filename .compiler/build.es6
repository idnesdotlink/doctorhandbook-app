'use-strict'
import webpack from 'webpack'
import config from './webpack/config/webpack.cordova.config'

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) console.log(err)

  console.log(stats.toString({
    chunks: false,
    colors: true
  }))

  process.exit()
})
