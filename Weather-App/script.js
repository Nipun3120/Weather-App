var searchBox = document.querySelector('#city');
var submit = document.querySelector('#submitbtn');

// city info
var city = document.querySelector('.name');
var country = document.querySelector('.country');
var lon = document.querySelector('.lon');
var lat = document.querySelector('.lat');

// weather info
var description = document.querySelector('.description');
var temperature = document.querySelector('.temperature');
var humidity = document.querySelector('.humidity');
var windDirection = document.querySelector('.wind-direction');
var windSpeed = document.querySelector('.wind-speed');


submit.addEventListener('click', ()=>{
    if (searchBox.value == "" || searchBox.value == " " ) {
        alert('Enter City Name');
    } else {
            
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ searchBox.value +'&appid=b4b51cb34ff9395619bb3566e12fcf9f')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            var cityInput = data['name'];
            var countryInput = data['sys']['country'];
            var descInput = data['weather'][0]['main'];
            var temperatureInput = data['main']['temp'] - 273 ;
            var humidityInput = data['main']['humidity']
            var windSpeedInput = data['wind']['speed']
            var windDirecInput = data['wind']['deg']
            var latInput = data['coord']['lat']
            var lonInput = data['coord']['lon']
            city.innerHTML = cityInput;
            country.innerHTML = countryInput;

            description.innerHTML = descInput;
                temperatureInput = temperatureInput.toFixed(1);
            temperature.innerHTML = "Temperature: " + temperatureInput +" °C";
            humidity.innerHTML = "Humidity: " + humidityInput;
            windDirection.innerHTML = "Wind Direction: " + windDirecInput + "°";
            windSpeed.innerHTML = "Speed: " + windSpeedInput + " m/s";
        })
        .catch(err => console.log('invalid'))
    }
})
