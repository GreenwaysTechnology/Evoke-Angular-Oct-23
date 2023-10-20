import { StudentService } from './services/student.service.js'

let studentService = new StudentService() as any 
console.log(studentService.subject)
