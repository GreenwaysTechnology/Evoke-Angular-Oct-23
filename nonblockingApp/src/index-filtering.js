
import { filter,  map, range, take } from 'rxjs'

range(0, 100).pipe(
    filter(x => x > 10),
    filter(x => x % 2 === 0),
    take(10)
).subscribe({
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