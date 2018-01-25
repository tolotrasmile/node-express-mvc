import Todo from '../models/todo.model'

class TodoController {

  /**
   * Get all users
   * @param request
   * @param response
   */
  findAll(request, response) {
    Todo.find()
      .then(todos => {
        response.json(todos)
      })
      .catch(error => {
        response.send(JSON.stringify(error))
      })
  }

  /**
   * Get user by id
   * @param request
   * @param response
   */
  findById(request, response) {
    Todo.findById(request.params.id)
      .then((todo) => {
        response.json(todo)
      })
      .catch(error => {
        response.send(JSON.stringify(error))
      })
  }

  /**
   * Create a new user by id
   * @param request
   * @param response
   */
  create(request, response) {
    const todo = {title: 'My first todo', completed: false, userId: 1, date: new Date(), description: 'Description'}
    Todo.create(todo)
      .then(() => response.send('Todo created'))
      .catch((error) => response.send(JSON.stringify(error)))
  }

  /**
   * Update user
   * @param request
   * @param response
   */
  update(request, response) {
    throw new Exception('Method not implemented')
  }

}


export default new TodoController()