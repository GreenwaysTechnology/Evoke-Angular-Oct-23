
import { interval } from 'rxjs'


interval(1000).subscribe({
    next(data) {
        console.log(`got value ${data}`)
    },
    error(err) {
        console.log(err)
    },
    complete() {
        console.log('stream is completed')
    }
})