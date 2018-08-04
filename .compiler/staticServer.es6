'use strict'

import Promise from 'bluebird'
import Koa from 'koa'
import serve from 'koa-static'
import { StaticPath } from './constant'
import { createServer } from 'http'
import socketIO from 'socket.io'

const staticServer = function () {
  const app = new Koa()

  app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    await next()
  })

  app.use(serve(StaticPath))
  const server = createServer(app.callback())
  const io = socketIO(server)

  io.on('connection', function (socket) {
    console.log('connected')
    socket.on('chat', function(msg){
        console.log(msg)
        io.emit('chat', msg + "222222")
    })
  })

  server.listen(3000)
  console.log('listening on port 3000')
  return Promise.resolve()
}
export default staticServer
