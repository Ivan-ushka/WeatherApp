import $api from "../http";

export default class AuthService{
    static async login(email, password){
        return $api.post('/login', {email, password})
    }

    static async registration(name, email, password){
        return $api.post('/registration', {name, email, password})
    }

    static async logout(){
        return $api.post('/logout')
    }

    static async checkPassword(email, password){
        return $api.post('/checkPwd', {email, password})
    }

    static async changePwd(email, password){
        return $api.post('/changePwd', {email, password})
    }
}