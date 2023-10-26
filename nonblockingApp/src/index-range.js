
import { range } from 'rxjs'


range(0,100).subscribe({
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