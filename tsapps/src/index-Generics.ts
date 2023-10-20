
//arrays:this list takes any type of data
let list = [1, "hello", true]

//Restrict that array should hold only numbers,strings,products...

//Generics <T>

//non generics syntax
let numList: number[] = [1, 2, 3, 5]

//generics syntax
let nameList: Array<string> = ["Subramanian", "Murugan"]

//product Array
class Product {
    id: number
    name: string
}

let productList: Array<Product> = [
    { id: 1, name: 'phone' },
    { id: 1, name: 'phone' }
]