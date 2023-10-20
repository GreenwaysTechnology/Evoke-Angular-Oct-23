//Declare decorators

function Course(target: any) {
    //decorator logic
    Object.defineProperty(target.prototype, 'subject', { value: 'Angular' });
}

//using decorators
@Course
class Student {
    constructor(public name: string) { }
}
let student = new Student('Subramanian') as any 
console.log(`${student.name} is learning ${student.subject} `)