<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'

/**
 * @see https://legacydocs.hubspot.com/docs/methods/forms/submit_form
 */
const portalId = "20576097"
const formId = "88be57f6-d429-4d64-824e-f2747ef41a74"
const actionUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

const state = reactive({
  email: ''
})

const formComplete = ref(false)

async function onSubmit(event: FormSubmitEvent<typeof state>) {
  try {
    const response = await fetch(actionUrl, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        submittedAt: `${Date.now()}`,
        fields: [
          { name: "email", value: event.data.email }
        ]
      })
    })

    if (response.ok) {
      formComplete.value = true
      state.email = ''
    }
  } catch (error) {
    console.error('Form submission error:', error)
  }
}
</script>

<template>
  <section class="flex flex-col my-8 space-y-4" aria-labelledby="newsletter-heading">
    <h2 id="newsletter-heading" class="sr-only">Newsletter Subscription</h2>
    
    <UForm v-if="!formComplete" :state="state" class="space-y-4" @submit="onSubmit">
      <fieldset class="flex justify-center">
        <legend class="sr-only">Enter your email to subscribe to our newsletter</legend>
        <div class="flex gap-4 items-end">
          <UFormField name="email" label="Email address" class="flex-1">
            <UInput 
              v-model="state.email" 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              size="lg"
              class="w-80"
              aria-describedby="email-description"
              required
            />
            <template #description>
              <span id="email-description">
                We'll use this to send you updates about our latest content.
              </span>
            </template>
          </UFormField>
          <UButton type="submit" size="lg" color="primary" aria-describedby="subscribe-description">
            Subscribe
          </UButton>
          <span id="subscribe-description" class="sr-only">
            Click to subscribe to our newsletter
          </span>
        </div>
      </fieldset>
    </UForm>
    
    <aside v-if="formComplete" class="flex justify-center" role="status" aria-live="polite">
      <UAlert 
        color="success" 
        variant="soft"
        title="Subscribed!"
        description="Thank you for subscribing to our newsletter."
        class="max-w-md"
      />
    </aside>
  </section>
</template>


