import express from 'express'
import todoController from '../controllers/todo.controller'

const router = express.Router()

router.route('/todos')
  .get(todoController.findAll)
  .post(todoController.create)
  .put(todoController.update)

router.route('/todos/:id')
  .get(todoController.findById)

export default router
