import React from 'react';
import '../../assets/css/card.css'

function Card(props) {
    return (
        <div className="card-advantages">
            <h1>Sign up to get more features</h1>
            <div className="container_">
                <div className="left">
                    <div className="img-wrap">
                        <img alt="err" src={require('../../assets/images/forecast.png')} />
                    </div>
                    <ul className="list1">
                        <li>Find out the weather forecast for the next 14 days</li>
                        <li>Find out the weather in the same time on different places</li>
                        <li>Discover all the features of our website</li>
                    </ul>
                </div>
                <div className="right">
                    <ul className="list2">
                        <li>Choose the coordinate on the map</li>
                        <li>Find out the maximum and minimum <br/>values in the history</li>
                        <li>Make your own weather</li>
                    </ul>
                    <div className="img-wrap2">
                        <img alt="err" src={require('../../assets/images/map.png')} width="300px"/>
                    </div>

                </div>
            </div>
            <div className="wrap-btn">
                <button className="btn__log">Login</button>
                <button className="btn__log">Sign up</button>
            </div>
        </div>
    );
}

export default Card;