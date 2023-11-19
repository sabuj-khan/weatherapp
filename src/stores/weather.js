import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
import axios from 'axios';

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    api_key: '322831d9190681718c52bf6b0eec5d84',
    weather_icon: 'https://openweathermap.org/img/wn/',
    location_query: '',
    weather: {}
  }),
  getters: {},
  actions: {
    async fetchWeather(e){
      if(e.key == 'Enter'){
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location_query}&units=metric&appid=${this.api_key}`);

        console.log(data);

        this.weather = data;


      }
    }
  }
  

  
})
