
import { map, range } from 'rxjs'

//emit values after doubling : double the number
//range(1,10).map()

range(0, 100).pipe(
    map(value => value * 2),
    map(x => x * 10)
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