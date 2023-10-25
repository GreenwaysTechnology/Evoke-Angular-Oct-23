
import { Observable } from 'rxjs'

//create stream from scratch

//publisher
const observable = new Observable(subscriber => {
    subscriber.next(1) //emit data event
    subscriber.next(2) //emit data event
    subscriber.next(3) //emit data event
    subscriber.next(4) //emit data event
})

//subscribers
observable.subscribe({
    next(data) {
        console.log(`got value ${data}`)
    }
})
