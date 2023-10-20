
class ProductService {
    constructor() { }
    //methods
    findAll(): string {
        return "products"
    }
    save(product: string): void {
        console.log('save method is called')
    }
}

let productService =new ProductService()
console.log(productService.findAll())
productService.save('myproduct')