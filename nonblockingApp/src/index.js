import { BehaviorSubject } from 'rxjs'

//create Subject 
const subject = new BehaviorSubject(0);

//one to many 
subject.subscribe({
    next(data) {
        console.log(`Subscriber A's Data ${data}`)
    }
})
subject.subscribe({
    next(data) {
        console.log(`Subscriber B's Data ${data}`)
    }
})
subject.next(10)
subject.next(23)
subject.next(34)
subject.next(12)

