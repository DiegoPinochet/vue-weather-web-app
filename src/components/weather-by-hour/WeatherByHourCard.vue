<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import WeatherByHour from './WeatherByHour.vue'

const props = defineProps<{
  weatherByHour: {
    temperature: number
    probabilityOfPrecipitation: number
    weatherIcon: string
    hour: string
    isLast?: boolean
  }[]
}>()
</script>

<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>Next hours</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="flex flex-row items-center max-w-full overflow-x-auto">
        <WeatherByHour
          v-for="hour in props.weatherByHour"
          :key="hour.hour"
          :temperature="hour.temperature"
          :probabilityOfPrecipitation="hour.probabilityOfPrecipitation"
          :weatherIcon="hour.weatherIcon"
          :hour="hour.hour"
          :is-last="hour.isLast"
        />
      </div>
    </CardContent>
  </Card>
</template>
