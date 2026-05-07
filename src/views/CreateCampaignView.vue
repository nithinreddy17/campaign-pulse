<script setup>
const formSteps = [
  {
    title: 'Campaign details',
    detail: 'Name, type, channel, and segment fields with validation.',
  },
  {
    title: 'Timeline & budget',
    detail: 'Date pickers and budget validation rules.',
  },
  {
    title: 'Submission flow',
    detail: 'Toast notification and redirect after creation.',
  },
]
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-surface-border bg-surface-card p-6">
      <h2 class="text-xl font-semibold text-slate-100">Create campaign</h2>
      <p class="mt-2 text-sm text-slate-400">
        The full form experience will land in the next phase with validation and success
        messaging.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <div
        v-for="step in formSteps"
        :key="step.title"
        class="rounded-xl border border-surface-border bg-surface p-4"
      >
        <p class="text-sm font-semibold text-slate-100">{{ step.title }}</p>
        <p class="mt-1 text-sm text-slate-400">{{ step.detail }}</p>
      </div>
    </div>
  </section>
</template>
