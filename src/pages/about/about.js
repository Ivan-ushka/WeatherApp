import React from 'react';
import '../../assets/css/about.css'
import NavBar from "../../layouts/navBar";
import Footer from "../../layouts/footer";

function About(props) {
    return (
        <div className="about">
            <NavBar/>
            <div className="about-border">
                <div className="author">
                    <img alt="myfoto" src={require("../../assets/images/my_photo.jpg")} width="300xp"/>
                    <div className="description-">
                        <h3 className="f">Created by Ivan Levchuk</h3>
                        <p>Second year student of the Faculty of Applied Mathematics<br/> and Computer Science of BSU
                        </p>
                        <p>Prepared as a project for the subject named TP</p>
                    </div>
                </div>
                <div className="shot-description">
                    The app will collect weather data, analyze forecast readings, display output data and help users
                    plan their day depending on conditions. It will display wind speed, humidity, temperature, type of
                    day and what the rest of the day will be like. The system shows hourly and daily weather changes,
                    calculates weekly output and helps the user to choose clothes according to the weather; gives an
                    idea of upcoming forecast changes and allergies that users may have. The system also broadcasts the
                    map in real time according to weather changes. Weather can automatically determine the user's
                    location, while the user can also manually set or find locations to determine the weather and
                    receive real-time updates.
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;