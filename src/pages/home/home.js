import React, {useContext, useEffect, useState} from 'react';
import Footer from "../../layouts/footer";
import "../../assets/css/home.css"
import NavBar from "../../layouts/navBar";
import TableToday from "../../components/ui/tableToday";
import TodayWeatherCard from "../../components/ui/todayWeatherCard";
import Card from "../../components/ui/card";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import Forecast from "../../components/ui/forecast";


function Home(props) {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [city, setCity] = useState('Minsk');
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const {store} = useContext(Context)

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                console.log(lat)
                console.log(long)
            });
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => {
                    if (res.status >= 200 && res.status < 300) {
                        return res;
                    } else {
                        let error = new Error("Некоректные входные данные");
                        error.response = res;
                        throw error
                    }
                })
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    console.log(result);
                })
                .catch((e) => {
                    console.log('Error: ' + e.message);
                    console.log(e.response);
                });
            await fetch(`${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => {
                    if (res.status >= 200 && res.status < 300) {
                        return res;
                    } else {
                        let error = new Error("Некоректные входные данные");
                        error.response = res;
                        throw error
                    }
                })
                .then(res => res.json())
                .then(result => {
                    setForecast(result)
                    console.log(result);
                })
                .catch((e) => {
                    console.log('Error: ' + e.message);
                    console.log(e.response);
                });
        }
        fetchData();
    }, [lat, long, city])

    useEffect(() => {
        if (weather.main !== undefined) {
            localStorage.setItem('weather', JSON.stringify(weather));
            // localStorage.setItem('precipitation', JSON.stringify(precipitation));
        }
    }, [weather]);

    useEffect(() => {
        if (forecast.list !== undefined) {
            localStorage.setItem('forecast', JSON.stringify(forecast));
            // localStorage.setItem('precipitation', JSON.stringify(precipitation));
        }
    }, [forecast]);

    return (
        <div className="home">
            <NavBar/>
            <div className="get__weather">
                {(typeof weather.main != 'undefined') ? (
                    <TodayWeatherCard weatherData={weather} setCity={setCity}/>
                ) : (
                    (weather.status >= 400) ? (
                        <TodayWeatherCard weatherData={JSON.parse(localStorage.getItem('weather'))} setCity={setCity}
                                          curDate={false}/>
                    ) : (
                        <TodayWeatherCard weatherData={JSON.parse(localStorage.getItem('weather'))} setCity={setCity}
                                          curDate={true}/>)
                )}
            </div>
            <div className="get__weather">
                {(typeof weather.main != 'undefined') ? (
                    <TableToday data={weather}/>
                ) : (
                    <TableToday data={JSON.parse(localStorage.getItem('weather'))}/>

                )}
            </div>
            {!store.isAuth ? (<Card/>) : (
                (typeof forecast.list != 'undefined') ? (
                    <Forecast forecast={forecast}/>
                ) : (
                    <Forecast forecast={JSON.parse(localStorage.getItem('forecast'))}/>

                )
            )}
            <Footer/>
        </div>
    );
}

export default observer(Home);
