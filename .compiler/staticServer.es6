'use strict'

import Promise from 'bluebird'
import Koa from 'koa'
import serve from 'koa-static'
import { StaticPath } from './constant'

const staticServer = function () {
  const app = new Koa()

  app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    await next()
  })

  app.use(serve(StaticPath))
  app.listen(3000)
  console.log('listening on port 3000')
  return Promise.resolve()
}
export default staticServer
