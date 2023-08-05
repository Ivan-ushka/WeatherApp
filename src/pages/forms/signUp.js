import React, {useContext, useEffect, useRef, useState} from 'react';
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faEnvelope, faInfoCircle, faLock, faTimes, faUser} from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/signUp.css"
import {Context} from "../../index";
import Routing from "../../routes/routing";
import {observer} from "mobx-react-lite";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

function SignUp(props) {
    const userRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [confirmPwd, setConfirmPwd] = useState('');
    const [validConfirmPwd, setValidConfirmPwd] = useState(false);
    const [pwdConfirmFocus, setPwdConfirmFocus] = useState(false);

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user))
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        setValidPwd(pwd.length >= 4)
        setValidConfirmPwd(pwd === confirmPwd)
    }, [pwd, confirmPwd])

    const  {store} = useContext(Context);
    return (
        <div>
            {store.isAuth ? <Routing replace to="/home"/> :(
        <div className="signup-page">
            <NavBar/>
            <div className="register">
                <div className="container">
                    <h1>Register</h1>
                    <div className="inp-wrap">
                        <FontAwesomeIcon icon={faUser} color="#999"/>
                        <input type="text"
                               placeholder="Username"
                               ref={userRef}
                               id="username"
                               onChange={e => setUser(e.target.value)}
                               value={user}
                               autoComplete="off"
                               required
                               aria-invalid={validName ? "false" : "true"}
                               aria-describedby="uidnote"
                               onFocus={() => setUserFocus(true)}
                               onBlur={() => setUserFocus(false)}
                        />
                        <label className="label"  htmlFor="username">
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"}/>
                            <FontAwesomeIcon icon={faTimes} className={validName || !user? "hide" : "invalid"}/>
                        </label>
                    </div>
                    <div className="inp-wrap">
                        <FontAwesomeIcon icon={faEnvelope} color="#999"/>
                        <input placeholder="Email"
                               type="text"
                               ref={userRef}
                               id="email"
                               onChange={e => setEmail(e.target.value)}
                               value={email}
                               autoComplete="off"
                               required
                               aria-invalid={validEmail ? "false" : "true"}
                               aria-describedby="emailnote"
                               onFocus={() => setEmailFocus(true)}
                               onBlur={() => setEmailFocus(false)}
                        />
                        <label className="label" htmlFor="email">
                            <FontAwesomeIcon icon={faCheck} className={validEmail? "valid" : "hide"}/>
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"}/>
                        </label>
                    </div>
                    <div className="inp-wrap">
                        <FontAwesomeIcon icon={faLock} color="#999"/>
                        <input placeholder="Password"
                               type="password"
                               onChange={e => setPwd(e.target.value)}
                               id="pwdInput"
                               value={pwd}
                               autoComplete="off"
                               required
                               aria-invalid={validPwd ? "false" : "true"}
                               aria-describedby="pwdnote"
                               onFocus={() => setPwdFocus(true)}
                               onBlur={() => setPwdFocus(false)}/>
                        <label className="label" htmlFor="psdInput">
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"}/>
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"}/>
                        </label>
                    </div>
                    <div className="inp-wrap">
                        <FontAwesomeIcon icon={faLock} color="#999"/>
                        <input placeholder="Repeat password"
                               type="password"
                               onChange={event => setConfirmPwd(event.target.value)}
                               id="confirm-pwd"
                               required
                               value={confirmPwd}
                               autoComplete="off"
                               aria-invalid={validConfirmPwd ? "false" : "true"}
                               onFocus={() => setPwdConfirmFocus(true)}
                               onBlur={() => setPwdConfirmFocus(false)}
                               aria-describedby="confirmnote"/>
                        <label className="label" htmlFor="confirm_pwd">
                            <FontAwesomeIcon icon={faCheck}
                                             className={validConfirmPwd && confirmPwd ? "valid" : "hide"}/>
                            <FontAwesomeIcon icon={faTimes}
                                             className={validConfirmPwd || !confirmPwd ? "hide" : "invalid"}/>
                        </label>
                    </div>
                    <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} className="me-1"/>
                        4 to 24 characters.<br/>
                        Must begin with a letter.<br/>
                    </p>
                    <p id="emailnote"
                       className={emailFocus && email && !validEmail  ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} className="me-1"/>
                        Incorrect email address
                    </p>
                    <p id="pwdnote" className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} className="me-1"/>
                        4 to 32 characters.<br/>
                    </p>
                    <p id="confirmnote"
                       className={pwdConfirmFocus && confirmPwd && !validConfirmPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} className="me-1"/>
                        Must match the first password input field.
                    </p>
                    <div className="checkbox-wrap">
                        <input type="checkbox" className="check-remember" id="check-remember"/>
                        <label htmlFor="check-remember">Remember me</label>
                    </div>
                    <div className="btn-log-wrap">
                        <button disabled={!validName|| !validPwd || !validConfirmPwd} className="btn-register" onClick={() => store.registration(user, email, pwd)}>Sign up</button>
                    </div>
                    <div className="text-form">
                        Or sign up with
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
                        <span className="me-1">Do you already have an account? </span>
                        <a href="/login">Login</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>)}
                </div>
    );
}

export default observer(SignUp);