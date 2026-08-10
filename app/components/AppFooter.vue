<script setup lang="ts">
const columns = [{
    label: 'Solutions',
    children: [{
        label: 'Cathedral',
        to: '/solutions/cathedral'
    }]
}, {
    label: 'Resources',
    children: [{
        label: 'Libraries',
        to: '/libraries'
    }, {
        label: 'About',
        to: '/about'
    }, {
        label: 'Contact',
        to: '/contact'
    }]
}, {
    label: 'Legal',
    children: [{
        label: 'Privacy Policy',
        to: '/privacy-policy'
    }]
}]
</script>

<template>
    <USeparator
        icon="i-simple-icons-nuxtdotjs"
        class="h-px"
    />

    <UFooter :ui="{ top: 'border-b border-default' }">
        <template #top>
            <UContainer>
                <UFooterColumns :columns="columns" />
            </UContainer>
        </template>

        <template #left>
            <p class="text-muted text-sm">
                Copyright &copy; 2020 - {{ new Date().getFullYear() }} Final Hill LLC. All Rights Reserved.
            </p>
        </template>

        <template #right>
            <UButton
                to="https://www.linkedin.com/company/final-hill/"
                target="_blank"
                icon="i-simple-icons-linkedin"
                aria-label="Final Hill on LinkedIn"
                color="neutral"
                variant="ghost"
            />
        </template>
    </UFooter>
</template>
