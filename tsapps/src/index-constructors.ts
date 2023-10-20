class Employee {
    //instance variables 
    id: number
    firstName: string
    lastName: string
    status: boolean
    constructor() {
        this.id = 0
        this.firstName = "subramnaian"
        this.lastName = "murugan"
        this.status = false
    }
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
