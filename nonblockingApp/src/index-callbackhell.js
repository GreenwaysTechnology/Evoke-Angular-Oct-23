//compostion: the out put of one callback will be input to another callback. 

function getUser(resolve, reject) {
    console.log('getUser is called')
    let user = {
        name: 'admin', password: 'admin'
    }
    // user=null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, 'User not found')
    }
}
function login(user, resolve, reject) {
    console.log('login is called')

    if (user.name === 'admin' && user.password === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}
function showDashboard(status, resolve, reject) {
    console.log('showDashboard is called')

    if (status === 'login success') {
        setTimeout(resolve, 1000, 'welcome to admin')
    } else {
        setTimeout(reject, 1000, 'Welcome to guest')
    }
}

function main() {
    getUser(function (user) {
        login(user, function (status) {
            showDashboard(status, function (page) {
                console.log(page)
            }, function (err) {
                console.log(err)
            })
        }, function (err) {
            console.log(err)
        })
    }, function (err) {
        console.log(err)
    })
}
main()