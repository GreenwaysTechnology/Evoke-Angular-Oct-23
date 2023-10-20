
//old style of writting anonymous function
let hello = function () {

}
//new style - es 6 style - arrow function
let hai = () => {
    console.log('hello')
}
hai()

//if function has only one line of body, we can remove {}
hai = () => console.log('hello')
hai()
//
let add = (a: number = 0, b: number = 0): void => {
    let c = a + b
    console.log(c)
}
add(10, 10)

///return

let multiply = (a: number = 0, b: number = 0): number => {
    return a * b
}
console.log(multiply(10, 10))
//if function has only return statement: we can remove {} and return statement

multiply = (a: number = 0, b: number = 0): number => a * b
console.log(multiply(10, 10))