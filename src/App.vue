<script setup lang="ts">
import WeatherByHourCard from './components/weather-by-hour/WeatherByHourCard.vue'
import WeatherByDateCard from './components/weather-by-date/WeatherByDateCard.vue'
import CitySearchForm from './components/city-search-form/CitySearchForm.vue'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs'
import { onMounted, ref, watch } from 'vue'
import { getWeatherByCityName } from './fetchers/get-weather-by-city-name.fetcher'
import { Loader2 } from 'lucide-vue-next'

type WeatherByHour = {
  temperature: number
  probabilityOfPrecipitation: number
  weatherIcon: string
  hour: string
  isLast?: boolean
}

type WeatherByDate = {
  minTemperature: number
  maxTemperature: number
  weatherIcon: string
  date: string
  description: string
  isLast?: boolean
}

const MAIN_CITIES = [
  {
    label: 'Rio de Janeiro',
    value: 'Rio de Janeiro',
  },
  {
    label: 'Beijing',
    value: 'Beijing',
  },
  {
    label: 'Los Angeles',
    value: 'Los Angeles',
  },
]

const selectedCity = ref<string>()
const isLoading = ref(false)
const currentWeatherByHour = ref<WeatherByHour[]>([])
const currentWeatherByDate = ref<WeatherByDate[]>([])

const customCityCoordinates = ref<string | undefined>()

const fetchWeatherData = async (
  cityName?: string,
  coordinates?: {
    lat: number
    long: number
  },
) => {
  try {
    isLoading.value = true

    const { weatherByHour, weatherByDate } = await getWeatherByCityName(cityName, coordinates)

    currentWeatherByHour.value = weatherByHour.map((hour, index) => ({
      temperature: hour.temperature,
      probabilityOfPrecipitation: hour.probabilityOfPrecipitation,
      weatherIcon: hour.icon,
      hour: hour.hour,
      isLast: index === weatherByHour.length - 1,
    }))
    currentWeatherByDate.value = Object.entries(weatherByDate).map(([date, weather], index) => ({
      minTemperature: weather.minTemperature,
      maxTemperature: weather.maxTemperature,
      weatherIcon: weather.forecasts[0].icon,
      date,
      description: weather.forecasts[0].description,
      isLast: index === Object.keys(weatherByDate).length - 1,
    }))
  } catch (error) {
    console.error('Error fetching weather data:', error)
  } finally {
    isLoading.value = false
  }
}

watch(selectedCity, async (newCity) => {
  customCityCoordinates.value = undefined
  await fetchWeatherData(newCity)
})

watch(customCityCoordinates, async (newCoordinates) => {
  if (!newCoordinates) {
    return
  }

  selectedCity.value = undefined

  await fetchWeatherData(undefined, {
    lat: parseFloat(newCoordinates.split(',')[0]),
    long: parseFloat(newCoordinates.split(',')[1]),
  })
})

onMounted(async () => {
  await fetchWeatherData(selectedCity.value)
})
</script>

<template>
  <div class="min-h-screen min-w-screen p-4 bg-blue-100">
    <main class="flex flex-col gap-4 w-full justify-start items-center">
      <CitySearchForm class="max-w-xl" v-model="customCityCoordinates" />
      <Tabs class="w-full max-w-xl" v-model="selectedCity">
        <TabsList class="w-full">
          <TabsTrigger v-for="city in MAIN_CITIES" :key="city.value" :value="city.value">
            {{ city.label }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="city in MAIN_CITIES" :key="city.value" :value="city.value">
          <div class="flex flex-col gap-4 w-full justify-center items-center">
            <div v-if="isLoading" class="w-full flex flex-row justify-center text-center py-4">
              <Loader2 class="w-10 h-10 animate-spin text-foreground" />
            </div>
            <template v-else>
              <WeatherByHourCard :weather-by-hour="currentWeatherByHour" />
              <WeatherByDateCard :weather-by-date="currentWeatherByDate" />
            </template>
          </div>
        </TabsContent>
      </Tabs>
      <div
        v-if="customCityCoordinates"
        class="max-w-xl flex flex-col gap-4 w-full justify-center items-center"
      >
        <div v-if="isLoading" class="w-full flex flex-row justify-center text-center py-4">
          <Loader2 class="w-10 h-10 animate-spin text-foreground" />
        </div>
        <template v-else>
          <WeatherByHourCard :weather-by-hour="currentWeatherByHour" />
          <WeatherByDateCard :weather-by-date="currentWeatherByDate" />
        </template>
      </div>
    </main>
  </div>
</template>
