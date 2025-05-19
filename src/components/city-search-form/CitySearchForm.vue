<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = toTypedSchema(
  z.object({
    city: z.string({
      required_error: 'City is required',
      invalid_type_error: 'City must be a string',
    }),
  }),
)

const form = useForm({
  validationSchema: formSchema,
})

const handleChange = () => {
  form.handleSubmit((values) => {
    console.log('Form submitted on change!', values)
  })()
}
</script>

<template>
  <form class="w-full">
    <FormField v-slot="{ componentField }" name="city">
      <FormItem>
        <FormControl>
          <Input
            type="text"
            placeholder="Search for a city"
            v-bind="componentField"
            @input="handleChange"
            class="text-foreground"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
  </form>
</template>
