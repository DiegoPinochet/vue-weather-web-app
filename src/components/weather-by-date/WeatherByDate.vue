<script setup lang="ts">
import { P } from '@/components/ui/typography'
import { Separator } from '@/components/ui/separator'

defineProps<{
  minTemperature: number
  maxTemperature: number
  weatherIcon: string
  date: string
  description: string
  isLast?: boolean
}>()
</script>

<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex flex-row items-center px-3 py-2 justify-between w-full gap-8">
      <img :src="weatherIcon" alt="weather icon" class="size-10" />
      <div class="flex flex-col gap-0.5 flex-1">
        <H4>{{ date }}</H4>
        <P class="text-muted-foreground">{{ description }}</P>
      </div>
      <div class="flex flex-row gap-2">
        <P>{{ minTemperature }}°</P>
        <P>{{ maxTemperature }}°</P>
      </div>
    </div>
    <Separator v-if="!isLast" class="my-2 w-full" />
  </div>
</template>
