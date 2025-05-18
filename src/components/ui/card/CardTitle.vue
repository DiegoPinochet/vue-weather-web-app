<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { H3 } from '@/components/ui/typography'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <H3 data-slot="card-title" :class="cn('leading-none font-semibold', props.class)">
    <slot />
  </H3>
</template>
