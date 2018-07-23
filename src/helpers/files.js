import { stat as fsStat, readFile as fsReadFile, readdir as fsreaddir } from 'fs'
import yaml from 'js-yaml'
import Promise from 'bluebird'

const statAsync = Promise.promisify(fsStat)
const readFileAsync = Promise.promisify(fsReadFile)
const readDirAsync = Promise.promisify(fsreaddir)

const readAs = function (file, as) {
  if (!(file instanceof Blob)) {
    throw new TypeError('Must be a File or Blob')
  }
  /* eslint-disable */
  return new Promise(function (resolve, reject) {
    let reader = new FileReader()
    reader.onload = function (event) { resolve(event.target.result) }
    reader.onerror = function (event) { reject(new Error('Error reading' + file.name + ': ' + event.target.result)) }
    reader['readAs' + as](file)
  })
  /* eslint-enable */
}

const stat = function (args) {
  return statAsync(args)
}

const readFile = function (args) {
  return readFileAsync(args)
}

const readDir = function (args) {
  return readDirAsync(args)
}

const readYAML = async function (args) {
  const content = await readFileAsync(args)
  return yaml.safeLoad(content.toString())
}

const readJSON = async function (args) {
  const content = await readFileAsync(args)
  return JSON.parse(content.toString())
}

const readAsDataURL = function (file) {
  return readAs(file, 'DataURL')
}

const readAsText = function (file) {
  return readAs(file, 'Text')
}

const readAsArrayBuffer = function (file) {
  return readAs(file, 'ArrayBuffer')
}

export {
  stat,
  readFile,
  readAsArrayBuffer,
  readAsDataURL,
  readAsText,
  readJSON,
  readDir,
  readYAML
}
