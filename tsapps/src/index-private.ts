//private 

class AuthService {
    private userName:string
    private password:string 

    public getUserName():string {
        return this.userName
    }

}
let authService = new AuthService()
//authService.userName