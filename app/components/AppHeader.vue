<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const open = ref(false)

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
    <UHeader v-model:open="open">
        <template #left>
            <NuxtLink to="/">
                <img src="/assets/final-hill.svg" alt="Final Hill" class="h-6" />
                <span class="ml-2 font-semibold">Final Hill</span>
            </NuxtLink>
        </template>

        <UNavigationMenu
            :items="items"
            variant="link"
        />

        <template #right>
            <UColorModeButton />

            <UTooltip text="LinkedIn" placement="bottom">
                <UButton color="neutral" variant="ghost" to="https://www.linkedin.com/company/final-hill/" target="_blank"
                    icon="i-simple-icons-linkedin" aria-label="LinkedIn" />
            </UTooltip>
        </template>

        <template #body>
            <UNavigationMenu
                :items="items"
                orientation="vertical"
                class="-mx-2.5"
            />
        </template>
    </UHeader>
</template>
