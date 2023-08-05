import React from 'react';
import "../../assets/css/forecast.css"

function Forecast({forecast}) {
    let numbers = [0,1,2,3,4,5,6,7,8,9]
    return (
        <div className="hourly-forecast">
            <h1>Hourly forecast</h1>
            <div className="table-wrapper grid-unit">
                {
                    numbers.map((numb) =>
                        (<div className="box-unit" key={numb}>
                            <div>{forecast.list[numb].dt_txt.split(' ')[1]}</div>
                            <img src={require(`../../assets/images/3dweathericons/${forecast.list[numb].weather[0].icon}.png`)}
                                 alt="error" width="130px" height="100px" className="img"/>
                            <div>{Math.floor(forecast.list[numb].main.temp)} °C</div>
                            <div style={{fontSize: "0.7em"}}>{forecast.list[numb].dt_txt.split(' ')[0]}</div>
                        </div>)
                    )
                }

            </div>

        </div>
    );
}

export default Forecast;