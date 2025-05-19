<script setup lang="ts">
import { P } from '@/components/ui/typography'
import { Separator } from '@/components/ui/separator'

defineProps<{
  temperature: number
  rainPercentage: number
  weatherIcon: string
  hour: string
  isLast?: boolean
}>()
</script>

<template>
  <div class="flex items-center w-48">
    <div class="flex flex-col gap-1 p-2 items-center w-full">
      <H4>{{ temperature }}°</H4>
      <P class="text-blue-300">{{ rainPercentage }}%</P>
      <img :src="weatherIcon" alt="weather icon" class="size-4" />
      <P class="text-muted-foreground">{{ hour }}</P>
    </div>
    <Separator v-if="!isLast" orientation="vertical" class="mx-2 !h-20" />
  </div>
</template>
