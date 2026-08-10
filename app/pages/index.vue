<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <div v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.hero.links"
    >
      <template #top>
        <HeroBackground />
      </template>

      <template #title>
        <MDC
          :value="page.title"
          unwrap="p"
        />
      </template>

      <UPageCard
        variant="subtle"
        class="rounded-2xl"
      >
        <img
          src="/assets/hub-and-spoke.svg"
          alt="Hub-and-spoke diagram: Cathedral at the center with Jira, Slack, Claude, and Azure DevOps as spokes"
          class="w-full rounded-xl"
        />
      </UPageCard>
    </UPageHero>

    <USeparator />

    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :id="section.id"
      :title="section.title"
      :description="section.description"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features"
    >
      <UPageCard
        v-if="section.image"
        variant="subtle"
        class="rounded-2xl"
      >
        <img
          :src="section.image"
          :alt="section.title"
          class="w-full rounded-xl"
        />
      </UPageCard>
      <ImagePlaceholder v-else />
    </UPageSection>

    <USeparator />

    <UPageSection
      :title="page.features.title"
      :description="page.features.description"
    >
      <UPageGrid>
        <UPageCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
          spotlight
        />
      </UPageGrid>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="evidence-pack"
      title="The evidence pack"
      description="The tangible artifact a regulator receives — Cathedral's physical evidence for an intangible service. Exportable, non-proprietary, customer-owned. Proof of coherence, not just compliance."
      orientation="horizontal"
    >
      <UPageCard
        variant="subtle"
        class="rounded-2xl"
      >
        <img
          src="/assets/evidence-pack.svg"
          alt="Sample evidence pack export showing requirements with provenance, endorsement status, and check results"
          class="w-full rounded-xl"
        />
      </UPageCard>
    </UPageSection>

    <USeparator />

    <UPageSection
      :title="page.faq.title"
      :description="page.faq.description"
    >
      <UAccordion
        :items="page.faq.items"
        :unmount-on-hide="false"
        :default-value="['0']"
        type="multiple"
        class="max-w-3xl mx-auto"
        :ui="{
          trigger: 'text-base text-highlighted',
          body: 'text-base text-muted'
        }"
      />
    </UPageSection>

    <USeparator />

    <UPageCTA
      id="subscribe"
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    >
      <HubSpotForm />
    </UPageCTA>
  </div>
</template>
