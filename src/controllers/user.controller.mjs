import User from '../models/user.model'

class UserController {

  /**
   * Get all users
   * @param request
   * @param response
   */
  getUsers(request, response) {
    User.find()
      .then(users => { response.json(users)})
      .catch(error => { response.send(JSON.stringify(error)) })
  }

  /**
   * Get user by id
   * @param request
   * @param response
   */
  getUserById(request, response) {
    User.findById(request.params.id)
      .then((users) => { response.json(users) })
      .catch(error => { response.send(JSON.stringify(error)) })
  }

  /**
   * Create a new user by id
   * @param request
   * @param response
   */
  createUser(request, response) {
    const user = {username: 'Tolotra', password: 'toto'}
    User.create(user)
      .then(() => { response.json(request.body) })
      .catch(error => { response.send(JSON.stringify(error)) })
  }

  /**
   * Update user
   * @param request
   * @param response
   */
  updateUser(request, response) {
    const json = request.body
    if (json && json._id) {
      User.findById(json._id).then(user => {
        if (user) {
          Object.assign(user, json)
          user.save().then(result => response.json({message: user}))
        } else {
          response.json({message: 'Unable to find user'})
        }
      })
    } else {
      response.json({message: 'Parameter id is not set'})
    }
  }

  /**
   * 
   * @param request
   * @param response
   */
  deleteUserById(request, response) {
    User.remove({_id: request.params.id})
      .then(() => {
        response.json({message: `User deleted ${request.params.id}`})
      })
      .catch(error => {
        response.send(JSON.stringify(error))
      })
  }

}

export default new UserController()
