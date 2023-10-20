import {TodoService} from './services/todo.service.js'

let todoService = new TodoService()

console.log(todoService.findAll())