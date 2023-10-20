//class based inheritance

class Account {
    constructor() {
        console.log('Account class')
    }
}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('Savings account')
    }
}
let sb = new SavingsAccount()