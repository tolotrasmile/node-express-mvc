import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
    trim: true
  },
  description: {
    required: true,
    type: String,
    trim: true
  },
  date: {
    required: true,
    type: Date
  },
  completed: {
    required: true,
    type: Boolean
  },
  userId: {
    required: true,
    type: Number
  }
})

export default mongoose.model('Todo', todoSchema)
