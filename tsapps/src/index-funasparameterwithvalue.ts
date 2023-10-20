function sayHello(greet) {
    greet('Hello')
}
sayHello(function (message) {
    console.log(message)
});