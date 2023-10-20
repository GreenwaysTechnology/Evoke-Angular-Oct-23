export function Course(courseInfo: any) {
    //write decorator logic
    return function (target: any) {
        //decorator logic
        Object.defineProperty(target.prototype, 'subject', { value: courseInfo });
    }
}