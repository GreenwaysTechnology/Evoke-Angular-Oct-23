
import { Subject } from 'rxjs'

//create Subject 
const subject = new Subject();

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
//emission should happen after subscription.
subject.next(1)
subject.next(2)