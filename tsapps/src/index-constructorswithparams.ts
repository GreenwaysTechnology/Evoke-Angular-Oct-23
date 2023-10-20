class Employee {
    //instance variables 
    id: number
    firstName: string
    lastName: string
    status: boolean
    constructor(id: number = 0, firstName: string = "", lastName: string = "", status: boolean = false) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.status = status
    }
}

//emp is just reference variable
//type is infered 
//new is keyword
//Employee() is constructor call
let emp = new Employee(1, "Subramanian", "Murugan", false)
console.log(emp.id)
console.log(emp.firstName)
console.log(emp.lastName)
console.log(emp.status)
