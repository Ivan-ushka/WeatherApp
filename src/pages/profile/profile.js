import React, {useContext, useEffect, useState} from 'react';
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navBar";
import "../../assets/css/profile.css"
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {Button} from "react-bootstrap";
import {Input} from "semantic-ui-react";


function Profile(props) {
    const {store} = useContext(Context)
    const [changePwd, setChangePwd] = useState(false);

    const [newPwd, setNewPwd] = useState('');
    const [validNewPwd, setValidNewPwd] = useState(false);

    const [confirmPwd, setConfirmPwd] = useState('');
    const [validConfirmPwd, setValidConfirmPwd] = useState(false);

    const [pwd, setPwd] = useState('');

    useEffect(() => {
        setValidNewPwd(newPwd.length >= 4)
        setValidConfirmPwd(newPwd === confirmPwd)
    }, [newPwd, confirmPwd])

    useEffect(() => {
        setPwd('')
    }, [store.isChangePwd, changePwd])

    useEffect(() => {

            setChangePwd(false);

    }, [store.isSuccessChangePwd])

    return (
        <div className="profile-page">
            <NavBar/>
            <div className="profile-border">
                <div className="user">
                    {/*<img alt="myfoto" src={require("../../assets/images/my_photo.jpg")} width="300xp"/>*/}
                    <div className="description">
                        <h3 className="name">User name: {store.user.name}</h3>
                        <h3 className="email">User email: {store.user.email}</h3>
                        {!changePwd ? (<Button onClick={() => setChangePwd(true)}>Change password</Button>) : (
                            !store.isChangePwd ? (
                                <div className="isChange">
                                    <label htmlFor="pas">Input your password</label>
                                    <Input type="password"
                                           id="pas"
                                           value={pwd}
                                           onChange={event => setPwd(event.target.value)}
                                    />
                                    <div className="btn-wrap">
                                        <Button onClick={() => store.checkPwd(store.user.email, pwd)}>click</Button>
                                        <Button onClick={() => setChangePwd(false)}>cancel</Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="newPwd">
                                    <label htmlFor="pas_">Input new password</label>
                                    <Input type="password"
                                           id="pas"
                                           value={newPwd}
                                           onChange={event => setNewPwd(event.target.value)}
                                    />
                                    <label htmlFor="pas_">Repeat new password</label>
                                    <Input type="password"
                                           id="pas_"
                                           value={confirmPwd}
                                           onChange={event => setConfirmPwd(event.target.value)}
                                    />
                                    <p className="note">
                                         Your password should have length = 3
                                    </p>
                                    <div className="btn-wrap">
                                        <Button disabled={!validNewPwd || !validConfirmPwd}
                                                onClick={event => store.changePwd(store.user.email, newPwd)}>click</Button>
                                        <Button onClick={() => store.setChangePwd(false)}>cancel</Button>
                                    </div>
                                </div>)
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default observer(Profile);