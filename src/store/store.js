import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";

export default class Store {
    user = {};
    isAuth = false;
    isChangePwd = false
    isSuccessChangePwd = false;

    constructor() {
        makeAutoObservable(this)
    }

    setSuccessChangePwd(bool) {
        this.isSuccessChangePwd = bool;
    }

    setChangePwd(bool) {
        this.isChangePwd = bool;
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(name, email, password) {
        try {
            const response = await AuthService.registration(name, email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout()
            console.log(response)
            localStorage.removeItem('token')
            this.setAuth(false);
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkPwd(email, pwd) {
        try {
            let response = await AuthService.checkPassword(email, pwd)
            this.setChangePwd(response.data)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async changePwd(email, pwd) {
        try {
            let response = await AuthService.changePwd(email, pwd)
            console.log(response)
            this.setSuccessChangePwd(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

}