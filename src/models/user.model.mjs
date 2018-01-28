import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    trim: true
  },
  password: {
    required: true,
    type: String
  },
  created_at: {
    default: new Date(),
    type: Date
  },
  updated_at: {
    default: new Date(),
    type: Date
  }
})

export default mongoose.model('User', userSchema)
