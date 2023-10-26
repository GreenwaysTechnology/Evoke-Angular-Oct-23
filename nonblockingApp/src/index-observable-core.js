
import { Observable } from 'rxjs'

//create stream from scratch

//publisher
const observable = new Observable(subscriber => {
    subscriber.next(1) //emit data event
    subscriber.next(2) //emit data event
    subscriber.next(3) //emit data event
    subscriber.error('something went wrong') // after error also nothing will be emitted
    subscriber.next(4) //emit data event
    subscriber.complete() //emit complete event 
    subscriber.next(5)  //after complete you will not get data
})

//subscribers
observable.subscribe({
    next(data) {
        console.log(`got value ${data}`)
    },
    error(err){
        console.log(err)
    },
    complete(){
        console.log('stream is completed')
    }
})
