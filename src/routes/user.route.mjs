import express from 'express'
import userController from '../controllers/user.controller'

const router = express.Router()

router.route('/users')
  .get(userController.getUsers)
  .post(userController.createUser)
  .put(userController.updateUser)

router.route('/users/:id')
  .get(userController.getUserById)
  .delete(userController.deleteUserById)

export default router
