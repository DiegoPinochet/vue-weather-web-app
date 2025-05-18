<script setup lang="ts">
import WeatherByHourCard from './components/weather-by-hour/WeatherByHourCard.vue'

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
</script>

<template>
  <div class="size-full p-4">
    <header class="mb-8">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </header>

    <main class="flex justify-center items-center">
      <div class="flex flex-col gap-4 w-full max-w-xl justify-center items-center">
        <WeatherByHourCard :weather-by-hour="weatherByHour" />
      </div>
    </main>
  </div>
</template>
