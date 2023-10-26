import { Subject, from, interval } from 'rxjs'

//create Subject 
const subject = new Subject();

//one to many 
subject.subscribe({
    next(data) {
        console.log(`Subscriber A's Data ${data}`)
    }
})
setTimeout(() => {
    subject.subscribe({
        next(data) {
            console.log(`Subscriber B's Data ${data}`)
        }
    })
}, 5000)
setTimeout(() => {
    subject.subscribe({
        next(data) {
            console.log(`Subscriber C's Data ${data}`)
        }
    })
}, 10000)
//emission should happen after subscription.
//if you want to emit values from the observable via subject 

const observable = interval(1000)
observable.subscribe(subject)