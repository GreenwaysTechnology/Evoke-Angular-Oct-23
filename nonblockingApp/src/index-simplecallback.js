function showMessage(message) {
    console.log(message)
}
function sayHello(abc) {
    //callback()
    let posts = [{
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }]
    setTimeout(abc, 5000, posts)
    //setInterval(abc, 1000, Math.random());
}
function main() {
    showMessage('start')
    //listener function : which is called once timeout event is triggered by kernal
    sayHello(function (posts) {
        console.log(posts)
    });
    showMessage('end')
}
main()