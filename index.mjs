import server from './src/configs/express.config'
import connectDatabase from './src/configs/mongoose.config'

import configs from './src/configs/configs'

server.init(configs.port)

server.start(() => {

  console.log('Listening on http://127.0.0.1:3000')
  connectDatabase(configs.databasePath)

})
