// export default class Store{
//     curData;
//     forecastData;
//     long;
//     lat;
//
//     static async fetchData ()  {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             this.lat = position.coords.latitude;
//             this.long = position.coords.longitude;
//         });
//         await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${this.lat}&lon=${this.long}&q=${this.city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
//             .then(res => res.json())
//             .then(result => {
//                 setData(result)
//                 console.log(result);
//             });
//     }
// }