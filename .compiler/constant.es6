'use-strict'
import path from 'path'
import PackageJSON from '../package.json'
const { dependencies, devDependencies } = PackageJSON
const RootPath = path.join(__dirname, '..')
const SrcPath = path.join(RootPath, 'src')
const CompilerPath = path.join(RootPath, '.compiler')
const NodeModulesPath = path.join(RootPath, 'node_modules')
const StaticPath = path.join(SrcPath, 'static')
const OutputPath = path.join(RootPath, 'www')
const MainPath = path.join(SrcPath, 'main')
const HtmlWebpackPluginTemplatePath = path.join(SrcPath, 'index.ejs')
const EntryJsPath = path.join(MainPath, 'entry.js')

export {
  PackageJSON,
  dependencies,
  devDependencies,
  RootPath,
  SrcPath,
  HtmlWebpackPluginTemplatePath,
  CompilerPath,
  NodeModulesPath,
  StaticPath,
  OutputPath,
  EntryJsPath,
  MainPath
}
