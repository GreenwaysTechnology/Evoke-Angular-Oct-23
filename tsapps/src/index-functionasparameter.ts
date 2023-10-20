//function as parameter

function sayHello(greet) {
 greet()
}
//function is assigned to a variable that variable can be passed
let hello = function () {
    console.log('Hello')
}
sayHello(hello)

sayHello(function(){
    console.log('Hello,how are you?')
})