<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { onMounted, ref, watch } from 'vue'
import { listCustomCities } from '@/fetchers/list-custom-cities.fetcher'

const props = defineProps<{
  modelValue: string | undefined
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const formSchema = toTypedSchema(
  z.object({
    latLong: z.string({
      required_error: 'Lat and long are required',
    }),
  }),
)

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    latLong: props.modelValue,
  },
})

const customCitiesOptions = ref<Array<{ label: string; value: string }>>([])

watch(form.values, (values) => {
  if (values.latLong) {
    emit('update:modelValue', values.latLong)
  }
})

onMounted(async () => {
  const customCities = await listCustomCities()

  customCitiesOptions.value = customCities.map((city) => ({
    label: city.name,
    value: city.coordinates,
  }))
})
</script>

<template>
  <form class="w-full">
    <FormField v-slot="{ componentField }" name="latLong">
      <FormItem>
        <Select v-bind="componentField" class="w-full">
          <FormControl>
            <SelectTrigger class="w-full bg-background text-foreground">
              <SelectValue placeholder="Select a city" class="w-full" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem v-for="city in customCitiesOptions" :key="city.value" :value="city.value">
              {{ city.label }}
            </SelectItem>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </FormField>
  </form>
</template>
