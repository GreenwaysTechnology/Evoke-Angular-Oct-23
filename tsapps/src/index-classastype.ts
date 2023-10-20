//literal object

//type class 

class Employee {
    id:number 
    name?:string
    status?:boolean
}

let employee:Employee = {
    id: 1,
    name: 'Subramanian',
    status: true
}
console.log(employee.id)
console.log(employee.name)
console.log(employee.status)

let employee1:Employee = {
    id: 1,
    name: 'Subramanian',
}
console.log(employee.id)
console.log(employee.name)
console.log(employee.status)