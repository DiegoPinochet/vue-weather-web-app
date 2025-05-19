<script setup lang="ts">
import WeatherByHourCard from './components/weather-by-hour/WeatherByHourCard.vue'
import WeatherByDateCard from './components/weather-by-date/WeatherByDateCard.vue'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs'
import { ref, computed } from 'vue'

interface WeatherByHour {
  temperature: number
  rainPercentage: number
  weatherIcon: string
  hour: string
  isLast: boolean
}

interface WeatherByDate {
  date: string
  maxTemperature: number
  minTemperature: number
  rainPercentage: number
  weatherIcon: string
  description: string
  isLast: boolean
}

interface CityWeather {
  byHour: WeatherByHour[]
  byDate: WeatherByDate[]
}

type CityCode = 'rio-de-janeiro' | 'beijing' | 'los-angeles'

const MAIN_CITIES = [
  {
    label: 'Rio de Janeiro',
    value: 'rio-de-janeiro' as CityCode,
  },
  {
    label: 'Beijing',
    value: 'beijing' as CityCode,
  },
  {
    label: 'Los Angeles',
    value: 'los-angeles' as CityCode,
  },
]

const selectedCity = ref<CityCode>('rio-de-janeiro')

const cityWeatherData: Record<CityCode, CityWeather> = {
  'rio-de-janeiro': {
    byHour: [
      {
        temperature: 28,
        rainPercentage: 10,
        weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
        hour: 'Now',
        isLast: false,
      },
      {
        temperature: 29,
        rainPercentage: 15,
        weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
        hour: '13:00',
        isLast: false,
      },
      {
        temperature: 30,
        rainPercentage: 20,
        weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
        hour: '14:00',
        isLast: false,
      },
      {
        temperature: 29,
        rainPercentage: 25,
        weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
        hour: '15:00',
        isLast: false,
      },
      {
        temperature: 28,
        rainPercentage: 30,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        hour: '16:00',
        isLast: false,
      },
      {
        temperature: 27,
        rainPercentage: 40,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        hour: '17:00',
        isLast: false,
      },
      {
        temperature: 26,
        rainPercentage: 35,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        hour: '18:00',
        isLast: true,
      },
    ],
    byDate: [
      {
        date: 'Today',
        maxTemperature: 30,
        minTemperature: 24,
        rainPercentage: 30,
        weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
        description: 'Partly cloudy with light rain',
        isLast: false,
      },
      {
        date: 'Tomorrow',
        maxTemperature: 29,
        minTemperature: 23,
        rainPercentage: 45,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        description: 'Rain showers likely',
        isLast: false,
      },
      {
        date: 'Wed',
        maxTemperature: 28,
        minTemperature: 22,
        rainPercentage: 60,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        description: 'Heavy rain expected',
        isLast: false,
      },
      {
        date: 'Thu',
        maxTemperature: 27,
        minTemperature: 21,
        rainPercentage: 40,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        description: 'Scattered showers',
        isLast: false,
      },
      {
        date: 'Fri',
        maxTemperature: 29,
        minTemperature: 22,
        rainPercentage: 20,
        weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
        description: 'Partly sunny',
        isLast: false,
      },
      {
        date: 'Sat',
        maxTemperature: 31,
        minTemperature: 24,
        rainPercentage: 10,
        weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
        description: 'Sunny skies',
        isLast: false,
      },
      {
        date: 'Sun',
        maxTemperature: 32,
        minTemperature: 25,
        rainPercentage: 5,
        weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
        description: 'Clear and sunny',
        isLast: true,
      },
    ],
  },
  beijing: {
    byHour: [
      {
        temperature: 18,
        rainPercentage: 5,
        weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
        hour: 'Now',
        isLast: false,
      },
      {
        temperature: 19,
        rainPercentage: 10,
        weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
        hour: '13:00',
        isLast: false,
      },
      {
        temperature: 20,
        rainPercentage: 15,
        weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
        hour: '14:00',
        isLast: false,
      },
      {
        temperature: 19,
        rainPercentage: 20,
        weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
        hour: '15:00',
        isLast: false,
      },
      {
        temperature: 18,
        rainPercentage: 25,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        hour: '16:00',
        isLast: false,
      },
      {
        temperature: 17,
        rainPercentage: 30,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        hour: '17:00',
        isLast: false,
      },
      {
        temperature: 16,
        rainPercentage: 25,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        hour: '18:00',
        isLast: true,
      },
    ],
    byDate: [
      {
        date: 'Today',
        maxTemperature: 20,
        minTemperature: 14,
        rainPercentage: 20,
        weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
        description: 'Partly cloudy',
        isLast: false,
      },
      {
        date: 'Tomorrow',
        maxTemperature: 19,
        minTemperature: 13,
        rainPercentage: 35,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        description: 'Light rain expected',
        isLast: false,
      },
      {
        date: 'Wed',
        maxTemperature: 18,
        minTemperature: 12,
        rainPercentage: 50,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        description: 'Moderate rain',
        isLast: false,
      },
      {
        date: 'Thu',
        maxTemperature: 17,
        minTemperature: 11,
        rainPercentage: 30,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        description: 'Scattered showers',
        isLast: false,
      },
      {
        date: 'Fri',
        maxTemperature: 19,
        minTemperature: 12,
        rainPercentage: 15,
        weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
        description: 'Partly sunny',
        isLast: false,
      },
      {
        date: 'Sat',
        maxTemperature: 21,
        minTemperature: 14,
        rainPercentage: 5,
        weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
        description: 'Sunny skies',
        isLast: false,
      },
      {
        date: 'Sun',
        maxTemperature: 22,
        minTemperature: 15,
        rainPercentage: 0,
        weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
        description: 'Clear and sunny',
        isLast: true,
      },
    ],
  },
  'los-angeles': {
    byHour: [
      {
        temperature: 24,
        rainPercentage: 0,
        weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
        hour: 'Now',
        isLast: false,
      },
      {
        temperature: 25,
        rainPercentage: 0,
        weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
        hour: '13:00',
        isLast: false,
      },
      {
        temperature: 26,
        rainPercentage: 5,
        weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
        hour: '14:00',
        isLast: false,
      },
      {
        temperature: 25,
        rainPercentage: 10,
        weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
        hour: '15:00',
        isLast: false,
      },
      {
        temperature: 24,
        rainPercentage: 15,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        hour: '16:00',
        isLast: false,
      },
      {
        temperature: 23,
        rainPercentage: 20,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        hour: '17:00',
        isLast: false,
      },
      {
        temperature: 22,
        rainPercentage: 15,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        hour: '18:00',
        isLast: true,
      },
    ],
    byDate: [
      {
        date: 'Today',
        maxTemperature: 26,
        minTemperature: 20,
        rainPercentage: 10,
        weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
        description: 'Mostly sunny',
        isLast: false,
      },
      {
        date: 'Tomorrow',
        maxTemperature: 25,
        minTemperature: 19,
        rainPercentage: 25,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        description: 'Light showers possible',
        isLast: false,
      },
      {
        date: 'Wed',
        maxTemperature: 24,
        minTemperature: 18,
        rainPercentage: 40,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        description: 'Rain likely',
        isLast: false,
      },
      {
        date: 'Thu',
        maxTemperature: 23,
        minTemperature: 17,
        rainPercentage: 20,
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
        description: 'Scattered showers',
        isLast: false,
      },
      {
        date: 'Fri',
        maxTemperature: 25,
        minTemperature: 18,
        rainPercentage: 5,
        weatherIcon: 'https://openweathermap.org/img/wn/02d@2x.png',
        description: 'Partly cloudy',
        isLast: false,
      },
      {
        date: 'Sat',
        maxTemperature: 27,
        minTemperature: 20,
        rainPercentage: 0,
        weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
        description: 'Sunny skies',
        isLast: false,
      },
      {
        date: 'Sun',
        maxTemperature: 28,
        minTemperature: 21,
        rainPercentage: 0,
        weatherIcon: 'https://openweathermap.org/img/wn/01d@2x.png',
        description: 'Clear and sunny',
        isLast: true,
      },
    ],
  },
}

const currentWeatherByHour = computed(() => cityWeatherData[selectedCity.value].byHour)
const currentWeatherByDate = computed(() => cityWeatherData[selectedCity.value].byDate)
</script>

<template>
  <div class="min-h-screen min-w-screen p-4 bg-blue-100">
    <header class="mb-8"></header>

    <main class="flex flex-col w-full justify-start items-center">
      <Tabs v-model="selectedCity" class="w-full max-w-xl">
        <TabsList class="w-full">
          <TabsTrigger v-for="city in MAIN_CITIES" :key="city.value" :value="city.value">
            {{ city.label }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="city in MAIN_CITIES" :key="city.value" :value="city.value">
          <div class="flex flex-col gap-4 w-full justify-center items-center">
            <WeatherByHourCard :weather-by-hour="currentWeatherByHour" />
            <WeatherByDateCard :weather-by-date="currentWeatherByDate" />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  </div>
</template>
