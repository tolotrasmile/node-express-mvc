import mongoose from 'mongoose'

export default function connectMongoose(databasePath) {

  mongoose.connect(databasePath)

  mongoose.connection.on('connected', () => {
    console.log('Connected to database')
  })

  mongoose.connection.on('error', (e) => {
    console.log('Error when connecting to database')
    console.log(e)
  })

}