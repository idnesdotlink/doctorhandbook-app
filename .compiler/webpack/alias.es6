import { SrcPath, MainPath } from '../constant'
import path from 'path'

const BaseAlias = {
  '@assets': path.join(SrcPath, 'assets'),
  '@pages': path.join(MainPath, 'pages'),
  '@components': path.join(MainPath, 'components'),
  '@database': path.join(MainPath, 'database'),
  '@service': path.join(MainPath, 'service'),
  '@store': path.join(MainPath, 'store'),
  '@': MainPath,
  'vue$': 'vue/dist/vue.esm.js'
}

export { BaseAlias }
