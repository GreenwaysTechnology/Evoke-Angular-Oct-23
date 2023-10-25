//compostion: the out put of one callback will be input to another callback. 

function getUser() {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = {
            name: 'admin', password: 'admin'
        }
        // user=null
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'User not found')
        }
    })
}
function login(user) {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin' && user.password === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })

}
function showDashboard(status) {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'welcome to admin')
        } else {
            setTimeout(reject, 1000, 'Welcome to guest')
        }
    })

}

async function main() {
    // getUser()
    //     .then(user => {
    //         return login(user)
    //     })
    //     .then(status => {
    //         return showDashboard(status)
    //     }).then(page => {
    //         console.log(page)
    //     })
    //     .catch(err => console.log(err))

    try {
        let user = await getUser()
        let status = await login(user)
        const page = await showDashboard(status)
        console.log(page)
    } catch (err) {
        console.log(err)
    }


}
main()