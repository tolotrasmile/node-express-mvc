import express from 'express'
import userRoutes from './user.route'
import todoRoutes from './todo.route'

const router = express.Router()

router.get('/', (request, response) => { response.send('API Connected') })
router.use(userRoutes)
router.use(todoRoutes)

export default router
