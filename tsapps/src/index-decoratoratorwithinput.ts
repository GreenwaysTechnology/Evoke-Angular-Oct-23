//Declare decorators with input

function Course(courseInfo: any) {
    //write decorator logic
    return function (target: any) {
        console.log(target)
        //decorator logic
        Object.defineProperty(target.prototype, 'subject', { value: courseInfo });
    }
}

//using decorators
@Course({ name: 'C#', duration: '40 hours' })
class Student {
    constructor(public name: string) { }
}
let student = new Student('Subramanian') as any
console.log(`${student.name} is learning ${student.subject.name} `)

@Course({ name: 'C#', duration: '40 hours' })
class Teacher {
    constructor(public name: string) { }
}