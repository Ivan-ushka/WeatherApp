import React from 'react';
import '../../assets/css/tableToday.css'


function TableToday({data}, {precipitation}) {

    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);
    return (
        <div className="table-wrapper grid-unit">
            <div className="box-unit">
                <img src={require("../../assets/images/umbrella.png")} alt="error" width="80px" height="70px"/>
                <div>Precipitation</div>
                <div>{precipitation}30 %</div>
            </div>
            <div className="box-unit">
                <img src={require("../../assets/images/drops.png")} alt="error" width="80px" height="70px"/>
                <div>Humidity</div>
                <div>{data.main.humidity} %</div>
            </div>
            <div className="box-unit">
                <img src={require("../../assets/images/wind.png")} alt="error" width="80px" height="80px"/>
                <div>Wind speed</div>
                <div>{data.wind.speed} m/c</div>
            </div>
            <div className="box-unit">
                <img src={require("../../assets/images/pressure.png")} alt="error" width="80px" height="80px"/>
                <div>Pressure</div>
                <div>{data.main.pressure} hPa</div>
            </div>
            <div className="box-unit">
                <div>
                <img src={require("../../assets/images/sunrise.png")} alt="error" width="50px" height="50px"/>
               <p>Sunrise: {`${('00' + sunrise.getHours()).slice(-2)}:
                 ${('00' + sunrise.getMinutes()).slice(-2)}:
                 ${('00' + sunrise.getSeconds()).slice(-2)}`}
               </p>
                </div>
                <div>
                <img src={require("../../assets/images/sunset.png")} alt="error" width="50px" height="50px"/>
                <p>Sunset: {`${('00' + sunset.getHours()).slice(-2)}:
                 ${('00' + sunset.getMinutes()).slice(-2)}:
                 ${('00' + sunset.getSeconds()).slice(-2)}`}
                </p>
                </div>
            </div>
            <div className="box-unit">
                <img src={require("../../assets/images/temperature.png")} alt="error" width="80px" height="80px"/>
                <div>Temperature feels like:<br/>{data.main.feels_like}</div>
            </div>
        </div>
    );
}

export default TableToday;