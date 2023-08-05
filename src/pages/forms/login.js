import React, {useContext, useState} from 'react';
import NavBar from "../../layouts/navBar";
import Footer from "../../layouts/footer";
import "../../assets/css/login.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Routing from "../../routes/routing";


function Login(props) {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const {store} = useContext(Context)
    return (
        <div className="page-login">
            {store.isAuth ? <Routing replace to="/home"/> :
                <div>
                    <NavBar/>
                    <div className="login">
                        <div className="container">
                            <h1>Login</h1>
                            <form action="submit">
                                <div className="inp-wrap">
                                    <FontAwesomeIcon icon={faEnvelope} color="#999"/>
                                    <input placeholder="Email"
                                           type="text"
                                           required
                                           onChange={e => setEmail(e.target.value)}
                                           value={email}
                                    />
                                </div>
                                <div className="inp-wrap">
                                    <FontAwesomeIcon icon={faLock} color="#999"/>
                                    <input placeholder="Password"
                                           type="text"
                                           required
                                           onChange={e => setPassword(e.target.value)}
                                           value={password}/>
                                </div>
                            </form>
                            <div className="checkbox-wrap">
                                <input type="checkbox" className="check-remember" id="check-remember"/>
                                <label htmlFor="check-remember">Remember me</label>
                            </div>
                            <div className="btn-log-wrap">
                                <button className="btn-login" onClick={() => store.login(email, password)}>Login
                                </button>
                            </div>
                            <div className="text-form">
                                Or login with
                            </div>
                            <div className="btn-form-wrap">
                                <a href="/login">
                                    <div className="btn-vk">
                                        <img alt="vk"
                                             src={require("../../assets/images/vk.png")}
                                             width="20px"
                                             height="20px"/>
                                        VK
                                    </div>
                                </a>
                                <a href="/login">
                                    <div className="btn-google">
                                        <img alt="google"
                                             src={require("../../assets/images/google.png")}
                                             width="20px"
                                             height="20px"
                                        />
                                        Google
                                    </div>
                                </a>
                            </div>
                            <div className="end">
                                <span>Not a member? </span>
                                <a href="/signup">Sign up now</a>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            }
        </div>

    );
}

export default observer(Login);