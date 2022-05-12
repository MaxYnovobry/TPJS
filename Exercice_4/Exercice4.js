


let input = document.getElementById('name')
let sub = document.getElementById('sub')
sub.addEventListener("click" , function(e) {
    CALLAPI(input.value)
    e.preventDefault()
})


function CALLAPI(cityName) {

    let myInit = { method: 'GET',
        mode: 'cors',
        cache: 'default' };

    let APIKEY = "2e4af7e54c09bc3e39db27bcf3cdb9b2"


    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url, myInit)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data)
            let temps = document.getElementById('temps')
            let city = document.getElementById('city')
            let weathers = document.getElementById('weather')
            let icon = document.getElementById('icon')
            temps.innerHTML = data.main.temp;
            city.innerHTML = data.name;
            weathers.innerHTML = data.weather[0].description;
            icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            icon.classList.remove('hidden')
        })
        .catch(function (error) {
            console.log(error);
        })
}

















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




