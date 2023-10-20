class Employee {
    //instance variables 
    id: number = 0
    firstName: string = "Subramanian"
    lastName: string = "Murugan"
    status: boolean = true
}

//emp is just reference variable
//type is infered 
//new is keyword
//Employee() is constructor call
let emp = new Employee()
console.log(emp.id)
console.log(emp.firstName)
console.log(emp.lastName)
console.log(emp.status)
