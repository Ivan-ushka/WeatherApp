import React, {useContext, useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import SignUp from "../pages/forms/signUp";
import Login from "../pages/forms/login";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Profile from "../pages/profile/profile";
import "./rounting.css"

function Routing(props) {
    const {store} = useContext(Context);

    useEffect( ()=>{
        if(localStorage.getItem('token')){
            store.checkAuth();
        }
    },[store])

    return (
        <div className='background'>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/login/*" element={<Login />}/>
            </Routes>
        </div>

    );
}

export default observer(Routing);