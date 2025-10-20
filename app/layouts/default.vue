<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: 'Home',
        to: '/',
        active: route.path === '/'
    },
    {
        label: 'Solutions',
        active: route.path.startsWith('/solutions'),
        children: [
            {
                label: 'Cathedral',
                to: '/solutions/cathedral',
                active: route.path === '/solutions/cathedral'
            }
        ]
    },
    {
        label: 'Libraries',
        to: '/libraries',
        active: route.path === '/libraries'
    },
    {
        label: 'About',
        to: '/about',
        active: route.path === '/about'
    },
    {
        label: 'Contact',
        to: '/contact',
        active: route.path === '/contact'
    }
])
</script>

<template>
    <UHeader title="Final Hill">
        <template #title>
            <img src="/assets/final-hill.svg" alt="Final Hill" class="h-6" />
            Final Hill
        </template>

        <UNavigationMenu :items="items" />

        <template #right>
            <UColorModeButton />

            <UTooltip text="LinkedIn" placement="bottom">
                <UButton color="neutral" variant="ghost" to="https://www.linkedin.com/company/final-hill/" target="_blank"
                    icon="i-simple-icons-linkedin" aria-label="LinkedIn" />
            </UTooltip>
        </template>
    </UHeader>


    <UContainer id="content" as="main">
        <slot />
    </UContainer>

    <UFooter>
        Copyright &copy; 2020 - {{ new Date().getFullYear() }} Final Hill LLC. All Rights Reserved. 
        <NuxtLink to="/privacy-policy" class="ml-4 underline">Privacy Policy</NuxtLink>
    </UFooter>
</template>
