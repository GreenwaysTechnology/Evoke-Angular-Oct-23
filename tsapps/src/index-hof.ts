
// const greet = h => {
//     h()
// }

const greet = h => h()

let hello = () => console.log('hello')
greet(hello);
//lnline
greet(() => console.log('hello,inline'))

//passing parameters

let subscribe = (a) => {
    console.log(`a ${a}`)
    a('hello')
}
//literals : number,string,boolean,undefined,NaN,infinity,function,null,object
// subscribe(1)
// subscribe('subu')
// subscribe(true)
subscribe(function (message) { console.log(message) })
subscribe((message) => { console.log(message + 'arrow') })
//..............

let login = (userName: string, password: string, resolve: Function, reject: Function) => {
    //biz logic 
    if (userName === 'admin' && password === 'admin') {
        resolve('Login success')
    } else {
        reject('Login failed')
    }

}
login('admin', 'admin', (status) => {
    console.log(status)
}, (err) => {
    console.log(err)
})
















