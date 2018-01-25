import express from 'express'
import bodyParser from 'body-parser'
import routes from '../routes'

class App {

  constructor(port = 3000) {
    this.app = express()
    this.port = port
  }

  init() {
    this.initMiddlewares()
    this.initRoutes()
    return this.app
  }

  initMiddlewares() {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({extended: true}))
  }

  initRoutes() {
    this.app.use(routes)
  }

  start(callback = () => {
  }) {
    this.app.listen(this.port, callback)
  }

}

export default new App()