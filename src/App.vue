<script setup>

import { useWeatherStore }  from './stores/weather';

const weatherStore = useWeatherStore();

</script>

<template>
  <div class="container">
    <div class="wrap">
      <!-- Search box for location -->
      <div class="search-box">
        <input v-model="weatherStore.location_query" @keypress="weatherStore.fetchWeather" type="text" name="" id="" placeholder="Type Location" class="search-bar">
      </div>

      <!-- Weather information -->
      <div v-if="weatherStore.weather.name" class="weather-info">
        <div class="location-box">
          <div class="location">{{ weatherStore.weather.name }} , {{ weatherStore.weather.sys.country }}</div>
          <div class="date">{{ new Date().toLocaleString() }}</div>
        </div>
        <div class="weather-box">
          <div class="temp">{{ weatherStore.weather.main.temp }} °C</div>
          <div class="weather">{{ weatherStore.weather.weather[0].main }} </div>
          <div class="icon_">
            <img :src="`https://openweathermap.org/img/wn/${weatherStore.weather.weather[0].icon}@2x.png`" alt="">
          </div>
          <div class="other-info">
            <span>Pressure: {{ weatherStore.weather.main.pressure }} mb</span>
            <span>Pressure: {{ weatherStore.weather.main.humidity }} %</span>
          </div>
        </div>
      </div>

      <div v-else class="weather-info">
        
        <div class="weather-box">
          <div class="off-info">Please, type the location in the search bar to see the weather condition of the place you want</div>
          <div class="dev-info">The Application is developed by <a href="#">Sabuj Khan</a></div>
          
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
.container{
  background-image: url('./assets/cloud.jpg');
  background-size: cover;
  background-position: center;
  transition: 0.5s;
  width: 375px;
  margin: 0 auto;
  border-radius: 25px;
  margin-top: 35px;
  box-shadow: 0px 0px 25px #00000075;
}

.wrap{
  height: 630px;
  padding: 25px;
  border-radius: 25px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.5));
}

.search-box .search-bar{
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
}

.location-box .location{
  color: #fff;
  font-size: 35px;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  margin-top: 25px;
}

.location-box .date{
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
}

.weather-box{
  text-align: center;
}

.weather-box .temp{
  display: inline-block;
  color: #fff;
  font-size: 65px;
  font-weight: 900;
  text-align: center;
  padding: 10px 20px;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 2555, 0.25);
  border-radius: 15px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  font-style: italic;
}

.weather-box .weather{
  color: #ffffff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .off-info{
  display: inline-block;
  color: #fff;
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  padding: 10px 20px;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 2555, 0.15);
  border-radius: 15px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  font-style: italic;
}

.other-info{
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.other-info span{
  color: #ffffff;
  font-size: 15px;
}

.dev-info{
  color: #fff;
  font-size: 13px;
}
.dev-info a{
  color: bisque;
  text-decoration: none;
  font-weight: 500;
  font-style: italic;
}

</style>
