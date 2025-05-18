<script setup lang="ts">
import WeatherByHourCard from './components/weather-by-hour/WeatherByHourCard.vue'
import WeatherByDateCard from './components/weather-by-date/WeatherByDateCard.vue'

const weatherByHour = [
  {
    temperature: 22,
    rainPercentage: 10,
    weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
    hour: 'Now',
    isLast: false,
  },
  {
    temperature: 23,
    rainPercentage: 15,
    weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
    hour: '13:00',
    isLast: false,
  },
  {
    temperature: 24,
    rainPercentage: 20,
    weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
    hour: '14:00',
    isLast: false,
  },
  {
    temperature: 23,
    rainPercentage: 25,
    weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
    hour: '15:00',
    isLast: false,
  },
  {
    temperature: 22,
    rainPercentage: 30,
    weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
    hour: '16:00',
    isLast: false,
  },
  {
    temperature: 21,
    rainPercentage: 40,
    weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
    hour: '17:00',
    isLast: false,
  },
  {
    temperature: 20,
    rainPercentage: 35,
    weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
    hour: '18:00',
    isLast: true,
  },
  {
    temperature: 22,
    rainPercentage: 10,
    weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
    hour: 'Now',
    isLast: false,
  },
  {
    temperature: 23,
    rainPercentage: 15,
    weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
    hour: '13:00',
    isLast: false,
  },
  {
    temperature: 24,
    rainPercentage: 20,
    weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
    hour: '14:00',
    isLast: false,
  },
  {
    temperature: 23,
    rainPercentage: 25,
    weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
    hour: '15:00',
    isLast: false,
  },
  {
    temperature: 22,
    rainPercentage: 30,
    weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
    hour: '16:00',
    isLast: false,
  },
  {
    temperature: 21,
    rainPercentage: 40,
    weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
    hour: '17:00',
    isLast: false,
  },
  {
    temperature: 20,
    rainPercentage: 35,
    weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
    hour: '18:00',
    isLast: true,
  },
]

const weatherByDate = [
  {
    date: 'Today',
    maxTemperature: 24,
    minTemperature: 18,
    rainPercentage: 30,
    weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
    description: 'Partly cloudy with light rain',
    isLast: false,
  },
  {
    date: 'Tomorrow',
    maxTemperature: 23,
    minTemperature: 17,
    rainPercentage: 45,
    weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
    description: 'Rain showers likely',
    isLast: false,
  },
  {
    date: 'Wed',
    maxTemperature: 22,
    minTemperature: 16,
    rainPercentage: 60,
    weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
    description: 'Heavy rain expected',
    isLast: false,
  },
  {
    date: 'Thu',
    maxTemperature: 21,
    minTemperature: 15,
    rainPercentage: 40,
    weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
    description: 'Scattered showers',
    isLast: false,
  },
  {
    date: 'Fri',
    maxTemperature: 23,
    minTemperature: 16,
    rainPercentage: 20,
    weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
    description: 'Partly sunny',
    isLast: false,
  },
  {
    date: 'Sat',
    maxTemperature: 25,
    minTemperature: 18,
    rainPercentage: 10,
    weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
    description: 'Sunny skies',
    isLast: false,
  },
  {
    date: 'Sun',
    maxTemperature: 26,
    minTemperature: 19,
    rainPercentage: 5,
    weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
    description: 'Clear and sunny',
    isLast: true,
  },
]
</script>

<template>
  <div class="size-full p-4 bg-blue-100">
    <header class="mb-8">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </header>

    <main class="flex justify-center items-center">
      <div class="flex flex-col gap-4 w-full max-w-xl justify-center items-center">
        <WeatherByHourCard :weather-by-hour="weatherByHour" />
        <WeatherByDateCard :weather-by-date="weatherByDate" />
      </div>
    </main>
  </div>
</template>
