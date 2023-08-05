import React, {useContext} from 'react';
import "../assets/css/navBar.css"
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons'


function NavBar(props) {
    const {store} = useContext(Context);
    return (
        <div className="navBar">
            <div className="left__part">
                <div className="wrap__logo">
                    <a href="/"><img alt="profile" src={require("../assets/images/logo2.png")} width="40px"/> Weather</a>
                </div>
                <div>
                    <a href="/">Home</a>
                    {(store.isAuth) &&
                        (<a href="https://openweathermap.org/weathermap?basemap=map&cities=false&layer=clouds&lat=32.8519&lon=-86.0010&zoom=8">WeatherMap</a>)}
                    <a href="/about">About</a>
                </div>
            </div>
            {/*<input type="text" placeholder="Search..." className="inp"/>*/}
            {(store.isAuth) ? (
                <div className="profile">
                    <FontAwesomeIcon icon={faUser} fontSize="30px" className="icon"/>
                    <div className="dropdown-content">
                        <a href="/profile">Information</a>
                        <a href="/" onClick={()=>store.logout()}>Log out</a>
                    </div>
                </div>
            ):(
                <div className="authorization">
                    <a href="/login">
                        <button className="btn__log">Login</button>
                    </a>
                    <a href="/signup">
                        <button className="btn__log">Sign up</button>
                    </a>
                </div>
            ) }
        </div>
    );
}

export default observer(NavBar);