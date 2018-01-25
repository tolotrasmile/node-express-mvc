import express from 'express'
import userRoutes from './user.route'

const router = express.Router()

router.get('/', (request, response) => {
  response.send('API Connected')
})
router.use(userRoutes)

export default router
