import express from 'express'
import { StaticPath } from './constant'

const staticServer = function  () {
  return new Promise((resolve) => {
    let app = express()
    app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next()
    })
    app.use(express.static(StaticPath))
    app.listen(3000, () => console.log('Example app listening on port 3000!'))
    resolve()
  })
}

export default staticServer
