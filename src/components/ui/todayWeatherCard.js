import React, {useState} from 'react';
import "../../assets/css/todayWeatherCard.css"
import Clock from "./clock";


function TodayWeatherCard({weatherData, setCity, curDate}) {
    const [dataToSearch, setDataToSearch] = useState( 'Minsk');
    const onKeyDown = (e) =>{
        if(e.code === 'Enter'){
            setCity(dataToSearch)
        }
    }
    return (
        <div className="todayWeatherCard">
            <div className="card__wrap">
                <div className="">{weatherData.weather[0].main}</div>
                <img src={require(`../../assets/images/3dweathericons/${weatherData.weather[0].icon}.png`)}
                     alt="error" width="130px" height="100px" className="img"/>
                <div className='temp'>{Math.floor(weatherData.main.temp)} <span>°C</span></div>
                <div>{weatherData.name}</div>
                <div><Clock timezone={weatherData.timezone}/></div>
            </div>
            <div className="form__city">
                {(curDate) ? <label form="city">Wrong input</label> :<label form="city"> Input city or country</label>}
                {<p>{curDate}</p>}
                <input type="text" id="city" className="city__input good"
                       onKeyDown={onKeyDown}
                       onChange={event => setDataToSearch(event.target.value)}/>
            </div>
        </div>
    );
}

export default TodayWeatherCard;