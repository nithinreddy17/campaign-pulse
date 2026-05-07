<script setup>
const analyticsDeliverables = [
  {
    title: 'KPI summary row',
    detail: 'Total budget, spend, reach, and conversion metrics.',
  },
  {
    title: 'Performance charts',
    detail: 'Grouped bar chart and campaign type doughnut chart.',
  },
  {
    title: 'Top campaigns table',
    detail: 'Ranked conversion rate table with utilization stats.',
  },
]
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-surface-border bg-surface-card p-6">
      <h2 class="text-xl font-semibold text-slate-100">Analytics view</h2>
      <p class="mt-2 text-sm text-slate-400">
        Analytics reporting is queued for a later phase with charts and ranked tables.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <div
        v-for="item in analyticsDeliverables"
        :key="item.title"
        class="rounded-xl border border-surface-border bg-surface p-4"
      >
        <p class="text-sm font-semibold text-slate-100">{{ item.title }}</p>
        <p class="mt-1 text-sm text-slate-400">{{ item.detail }}</p>
      </div>
    </div>
  </section>
</template>
