
import { from } from 'rxjs'


from([1, 2, 3, 4, 5, 6]).subscribe({
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