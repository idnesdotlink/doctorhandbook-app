import rules from  '../rules/cordovaRules'
import { assign } from 'lodash'
import { EntryJsPath, OutputPath, OutputPublicPath } from '../../constant'
import htmlWebpackPlugin from '../plugins/htmlWebpackPlugin'
import miniCssExtractPlugin from '../plugins/miniCssExtractPlugin'
import { VueLoaderPlugin } from 'vue-loader'
import { VueMaterialAlias, BaseAlias } from '../alias'
import extension from '../extensions'
const config = {
  entry: {
    main: [EntryJsPath]
  },
  mode: 'development',
  output: {
    path: OutputPath,
    filename: '[name].js',
    publicPath: OutputPublicPath
  },
  resolve: {
    extensions: extension,
    alias: assign({}, BaseAlias)
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
