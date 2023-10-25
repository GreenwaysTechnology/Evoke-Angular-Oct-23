//promise basics: create promise 

function blockMe(message) {
    console.log(message)
}
function getError() {
    //return Promise with success
    return Promise.reject('something went wrong')
}

blockMe('start')
getError().catch(res=>console.log(res))
blockMe('end')