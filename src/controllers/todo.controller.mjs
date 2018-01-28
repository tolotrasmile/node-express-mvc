import Todo from '../models/todo.model'

class TodoController {

  /**
   * Get all todos
   * @param request
   * @param response
   */
  findAll(request, response) {
    Todo.find()
      .then(todos => { response.json(todos) })
      .catch(error => { response.send(JSON.stringify(error)) })
  }

  /**
   * Get todo by id
   * @param request
   * @param response
   */
  findById(request, response) {
    Todo.findById(request.params.id)
      .then((todo) => { response.json(todo) })
      .catch(error => { response.send(JSON.stringify(error)) })
  }

  /**
   * Create a new todo
   * @param request
   * @param response
   */
  create(request, response) {

    const title = request.body.title
    const userId = request.body.userId
    const description = request.body.description

    const todo = {title, userId, description, completed: false, date: new Date()}

    Todo.create(todo)
      .then(() => response.json(todo))
      .catch((error) => response.send(JSON.stringify(error)))
  }

  /**
   * Update todo
   * @param request
   * @param response
   */
  update(request, response) {
    throw new Error('Method not implemented')
  }

}

export default new TodoController()
