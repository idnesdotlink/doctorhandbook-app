import rules from  '../rules/cordovaRules.es6'
import { EntryJsPath, OutputPath } from '../../constant.es6'
import htmlWebpackPlugin from '../plugins/htmlWebpackPlugin'
import miniCssExtractPlugin from '../plugins/miniCssExtractPlugin'
import { VueLoaderPlugin } from 'vue-loader'
import extension from '../extensions'
const config = {
  entry: EntryJsPath,
  mode: 'development',
  output: {
    path: OutputPath,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: extension,
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: rules
  },
  plugins: [
    new VueLoaderPlugin(),
    miniCssExtractPlugin,
    htmlWebpackPlugin
  ]
}

export default config
