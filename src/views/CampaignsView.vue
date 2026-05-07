<script setup>
const upcomingMilestones = [
  {
    title: 'Search + filter bar',
    detail: 'Bind search, status, and type filters to the store.',
  },
  {
    title: 'Campaign grid',
    detail: 'Render responsive cards with progress bars and badges.',
  },
  {
    title: 'Empty state',
    detail: 'Add a friendly message when no campaigns match filters.',
  },
]
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-surface-border bg-surface-card p-6">
      <h2 class="text-xl font-semibold text-slate-100">Campaigns view</h2>
      <p class="mt-2 text-sm text-slate-400">
        This view will surface the full campaign grid, filters, and management actions in a
        upcoming phase.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <div
        v-for="milestone in upcomingMilestones"
        :key="milestone.title"
        class="rounded-xl border border-surface-border bg-surface p-4"
      >
        <p class="text-sm font-semibold text-slate-100">{{ milestone.title }}</p>
        <p class="mt-1 text-sm text-slate-400">{{ milestone.detail }}</p>
      </div>
    </div>
  </section>
</template>
