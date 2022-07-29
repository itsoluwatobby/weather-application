 
 /**
  * Weather App
  * TODO: Complete getWeatherData() to return json response Promise
  * TODO: Complete searchCity() to get user input and get data using getWeatherData()
  * TODO: Complete showWeatherData() to set the data in the the html file from response
  */

  

 const cityName = document.getElementById("city-name")
 const weatherType = document.getElementById("weather-type")
 const temp = document.getElementById("temp")
 const humidity = document.getElementById("humidity")
 const localTime = document.getElementById("local-time")
 

 
  const searchCity = () => {
   const city = document.getElementById('city-input').value;
  
   getWeatherData(city)
 }

 getWeatherData = (city) => {
   
   const API_KEY= 'key=759f5ed9e78444d687184640222907&q'
   const URL = 'http://api.weatherapi.com/v1/current.json?'
   const END = '&aqi=no'
   
   fetch(`${URL}${API_KEY}=${city}${END}`)
   .then(response => response.json())
   .then(data => {
        showWeatherData(data)
   })
   .catch(err => console.error(err));
 } 
 
 const showWeatherData = (weatherData) => {

      const STATE = weatherData.current
      const LOCATION = weatherData.location

      cityName.innerText = `${LOCATION.name}`
      weatherType.innerText = `${STATE.condition.text}`
      temp.innerText = `${STATE.temp_f}`
      humidity.innerText = `${STATE.humidity}`
      localTime.innerText = `${LOCATION.localtime}`
 }
 
 