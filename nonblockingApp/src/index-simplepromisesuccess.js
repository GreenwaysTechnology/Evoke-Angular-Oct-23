//promise basics: create promise 

function blockMe(message) {
    console.log(message)
}
function getMessage() {
    //return Promise with success
    return Promise.resolve('Hello')
}

blockMe('start')
getMessage().then(res=>console.log(res))
blockMe('end')