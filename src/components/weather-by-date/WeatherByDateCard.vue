<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import WeatherByDate from './WeatherByDate.vue'

const props = defineProps<{
  weatherByDate: {
    minTemperature: number
    maxTemperature: number
    weatherIcon: string
    date: string
    description: string
    isLast?: boolean
  }[]
}>()
</script>

<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>Next 5 days</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="flex flex-col items-center w-full">
        <WeatherByDate
          v-for="date in props.weatherByDate"
          :key="date.date"
          :minTemperature="date.minTemperature"
          :maxTemperature="date.maxTemperature"
          :weatherIcon="date.weatherIcon"
          :date="date.date"
          :description="date.description"
          :is-last="date.isLast"
        />
      </div>
    </CardContent>
  </Card>
</template>
