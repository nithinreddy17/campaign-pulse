<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Bell, Search } from 'lucide-vue-next'

const route = useRoute()

const currentPageTitle = computed(() => route.meta?.title ?? 'Dashboard')
</script>

<template>
  <header class="flex items-center justify-between border-b border-surface-border bg-surface px-6 py-5">
    <div>
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">CampaignPulse</p>
      <h1 class="text-2xl font-semibold text-slate-100">{{ currentPageTitle }}</h1>
    </div>
    <div class="flex items-center gap-3">
      <button
        type="button"
        class="rounded-lg border border-surface-border bg-surface-card p-2 text-slate-200 transition hover:border-brand-500/60 hover:text-brand-100"
        aria-label="Search"
      >
        <Search class="h-4 w-4" />
      </button>
      <button
        type="button"
        class="rounded-lg border border-surface-border bg-surface-card p-2 text-slate-200 transition hover:border-brand-500/60 hover:text-brand-100"
        aria-label="Notifications"
      >
        <Bell class="h-4 w-4" />
      </button>
    </div>
  </header>
</template>
