import { SrcPath, MainPath } from '../constant'
import path from 'path'
/*
const Ver = 'dev'
const VueMaterialPath = path.join(SrcPath, 'vue-material', Ver)

const VueMaterialAlias = {
  'components': path.join(VueMaterialPath, 'components'),
  'vue-material/material': path.join(VueMaterialPath, 'material.js'),
  'core': path.join(VueMaterialPath, 'core'),
  'theme': path.join(VueMaterialPath, 'theme'),
  'vue-material/base/index.scss': path.join(VueMaterialPath, 'base', 'index.scss'),
  'vue-material/theme/engine.scss': path.join(VueMaterialPath, 'theme', 'engine.scss'),
  'vue-material/theme/all.scss': path.join(VueMaterialPath, 'theme', 'all.scss'),
  'vue-material': VueMaterialPath
} */

const BaseAlias = {
  '@assets': path.join(SrcPath, 'assets'),
  '@pages': path.join(MainPath, 'components', 'pages'),
  '@ui': path.join(MainPath, 'components', 'ui'),
  '@sections': path.join(MainPath, 'components', 'sections'),
  '@database': path.join(MainPath, 'database'),
  '@service': path.join(MainPath, 'service'),
  '@store': path.join(MainPath, 'store'),
  '@': MainPath,
  'vue$': 'vue/dist/vue.esm.js',
  'PushNotification': window.PushNotification
}

export { BaseAlias }
