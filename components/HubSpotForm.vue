<script setup>
import { ref } from 'vue';

/**
 * @see https://legacydocs.hubspot.com/docs/methods/forms/submit_form
 */
const portalId = "20576097",
    formId = "88be57f6-d429-4d64-824e-f2747ef41a74",
    actionUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

const email = ref('');
const formComplete = ref(false);

async function submitForm() {
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
                { name: "email", value: email.value }
            ]
        })
    });

    if (response.ok) {
        formComplete.value = true;
        email.value = '';
    }
}
</script>

<template>
    <form @submit.prevent="submitForm" class="hubspot-form">
        <fieldset>
            <input v-model.trim="email" type="email" name="email" placeholder="Enter your email" required>
            <button type="submit">Subscribe</button>
        </fieldset>
        <fieldset v-if="formComplete">
            <h3>Subscribed!</h3>
        </fieldset>
    </form>
</template>

<style>
.hubspot-form {
    display: flex;
    flex-direction: column;
    margin: 2em 0;

    & fieldset {
        border: none;
        display: flex;
        justify-content: center;
    }

    & input {
        height: 2em;
        width: 20em;
        border: 1px solid var(--vp-c-brand-1);
        padding: 0.5em;
        border-radius: 12px;
        font-size: 1.5em;
        margin-right: 1em;
    }

    & button {
        background-color: var(--vp-c-bg-soft);
        border: 1px solid var(--vp-c-brand-1);
        border-radius: 12px;
        color: var(--font-color);
        padding: 0.5em;
        font-size: 1.2em;
    }
}
</style>
