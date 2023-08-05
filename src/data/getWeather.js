import React, {useEffect, useState} from 'react';
import TodayWeatherCard from "../components/ui/todayWeatherCard";
import '../assets/css/getWeather.css'


function GetWeather(props) {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [city, setCity] = useState( 'Minsk');
    const [dataToSearch, setDataToSearch] = useState( 'Minsk');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                console.log(lat)
                console.log(long)
            });
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }
        fetchData();
    }, [lat,long,city])

    const onKeyDown = (e) =>{
        if(e.code === 'Enter'){
            setCity(dataToSearch)
        }
    }

    return (
        <div className="get__weather">
            {(typeof data.main != 'undefined') ? (
                <TodayWeatherCard weatherData={data}/>
            ): (
                <div/>
            )}
            <div className="form__city">
                <label form="city">Input city or coordinates</label>
                <input type="text" id="city" className="cityF"
                       onKeyDown={onKeyDown}
                       onChange={event => setDataToSearch(event.target.value)}/>
            </div>
        </div>
    );
}

export default GetWeather;