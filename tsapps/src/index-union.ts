
//type
let id: number | string = 1
id = "abc"

let gender: "Male" | "Female" | "Third" = "Male"

gender = "Male"
gender = "Female"
//gender ="test"

//functions and union type
function getJobStatus(jobStatus: "Open" | "Pending" | "Closed" | "Wait List" = "Open") {
    console.log(jobStatus)
}
getJobStatus("Open")

let mode = (varient: "Dark" | "Light" = "Dark") => {
    console.log(varient)
}
mode("Light")
mode()