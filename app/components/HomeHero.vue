<script setup lang="ts">

const cards = ref([
    {
        title: 'Discovery',
        description: 'Gather, elicit, and document requirements from stakeholders',
        variant: 'soft' as const
    },
    {
        title: 'Analysis',
        description: 'Analyze and refine requirements to ensure clarity and coherence',
        variant: 'soft' as const
    },
    {
        title: 'Versioning',
        description: 'Track changes and manage requirements over time',
        variant: 'soft' as const
    },
    {
        title: 'Traceability',
        description: 'Link requirements across the lifecycle to ensure alignment and coverage',
        variant: 'soft' as const
    },
])

</script>
<template>
    <UPageHero title="Final Hill" description="Constructing Solutions, Crafting Legacies" />

    <UPageGrid>
        <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card" />
    </UPageGrid>
</template>