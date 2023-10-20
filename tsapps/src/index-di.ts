class Address {
    constructor(public city: string = "", public street: string = "", public state: string = "") { }
}

class Employee {
    constructor(public id: number = 0, public firstName: string = "", public lastName: string = "", public status: boolean = false, public address: Address = new Address()) { }
}

let emp = new Employee(1, "Subramanian", "Murugan", false, new Address('Coimbatore', '10th street', "Tamil nadu"))
console.log(emp.id)
console.log(emp.firstName)
console.log(emp.lastName)
console.log(emp.status)
console.log(emp.address.street)
console.log(emp.address.city)
console.log(emp.address.state)
//////////////


class ProductService {
    constructor() {

    }
    findAll() {
        return 'products'
    }
}
class ProductController {

    constructor(private productService:ProductService) { }
    public init() {
        console.log(this.productService.findAll())
    }
}
let ctrl = new ProductController(new ProductService())
ctrl.init()

