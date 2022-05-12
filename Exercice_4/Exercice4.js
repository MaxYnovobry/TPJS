
function append(parent, el) {
    return parent.appendChild(el);
}
var myInit = { method: 'GET',
    mode: 'cors',
    cache: 'default' };

let cityName = "Marseille"

let APIKEY = "2e4af7e54c09bc3e39db27bcf3cdb9b2"


let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric&lang=fr`;


fetch(url, myInit)
    .then((resp) => resp.json())
    .then(function (data) {
        console.log(data)
            let temps = document.getElementById('temps')
            let city = document.getElementById('city')
            let weathers = document.getElementById('weather')
            temps.innerHTML = data.main.temp;
            city.innerHTML = data.name;
            weathers.innerHTML = data.weather[0].description;
    })
    .catch(function (error) {
        console.log(error);
    })


















//var request = new XMLHttpRequest()
//var url =  'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2e4af7e54c09bc3e39db27bcf3cdb9b2'
//request.open('GET', url , true)
//request.onload = function () {
   // var data = JSON.parse(this.response)
    //var city = document.getElementById("city")
    //data.forEach(city => {
        //console.log(city.id)
        //console.log(city.name)
   // })
//}
        //var pression = document.getElementById("pression")
        //pression.innerText = data.pressure
        //document.getElementById("humidity")




