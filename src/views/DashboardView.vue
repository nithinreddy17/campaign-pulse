<script setup>
const phases = [
  {
    number: 1,
    title: 'Foundation & layout shell',
    status: 'Completed',
    summary: 'Tailwind config, fonts, and the base app shell with routing.',
  },
  {
    number: 2,
    title: 'Data model & store',
    status: 'In progress',
    summary: 'Mock campaign data and Pinia store scaffolding.',
  },
  {
    number: 3,
    title: 'Dashboard stat cards',
    status: 'Queued',
    summary: 'KPI cards and summary metrics for campaigns.',
  },
  {
    number: 4,
    title: 'Dashboard charts',
    status: 'Queued',
    summary: 'Bar and doughnut charts with dark-mode styling.',
  },
  {
    number: 5,
    title: 'Campaign cards & badges',
    status: 'Queued',
    summary: 'Reusable cards, status badges, and progress indicators.',
  },
  {
    number: 6,
    title: 'Campaigns view filters',
    status: 'Queued',
    summary: 'Search and filter controls wired to the store.',
  },
  {
    number: 7,
    title: 'Create campaign form',
    status: 'Queued',
    summary: 'Validated form, submit flow, and toast notifications.',
  },
  {
    number: 8,
    title: 'Modal & delete flow',
    status: 'Queued',
    summary: 'Teleported modal dialog and delete confirmation.',
  },
  {
    number: 9,
    title: 'Analytics view',
    status: 'Queued',
    summary: 'Analytics KPIs, charts, and top-performers table.',
  },
  {
    number: 10,
    title: 'Responsive polish',
    status: 'Queued',
    summary: 'Responsive layout adjustments and sidebar toggle.',
  },
  {
    number: 11,
    title: 'QA & documentation',
    status: 'Queued',
    summary: 'Final QA pass, README refresh, and linting setup.',
  },
]

const phaseTwoDeliverables = [
  {
    title: 'Campaign mock data',
    description: 'Curated 12 campaigns with varied statuses, budgets, and channels.',
  },
  {
    title: 'Pinia campaign store',
    description: 'Search, filter, and stats computed state ready for UI binding.',
  },
  {
    title: 'Data layer handoff',
    description: 'Prepared the data foundation for upcoming stat cards and charts.',
  },
]

const statusClasses = {
  'In progress': 'border-brand-500/40 bg-brand-600/20 text-brand-100',
  Completed: 'border-emerald-500/40 bg-emerald-500/20 text-emerald-300',
  Queued: 'border-surface-border bg-white/5 text-slate-300',
}

const totalPhases = phases.length
const statusClassFor = (status) => statusClasses[status] ?? statusClasses.Queued
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-surface-border bg-surface-card p-6">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div class="space-y-2">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Phase roadmap
          </p>
          <h2 class="text-2xl font-semibold text-slate-100">
            Building CampaignPulse in structured phases
          </h2>
          <p class="text-sm text-slate-300">
            We are delivering the full dashboard in focused phases to keep quality high and
            workloads manageable.
          </p>
        </div>
        <div class="rounded-xl border border-surface-border bg-surface px-4 py-3 text-right">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Total phases</p>
          <p class="text-3xl font-mono text-slate-100">
            {{ totalPhases.toLocaleString() }}
          </p>
        </div>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-[1.4fr,0.9fr]">
      <div class="rounded-2xl border border-surface-border bg-surface-card p-6">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-slate-100">Phase timeline</h3>
          <p class="text-xs text-slate-400">Phase 2 is active</p>
        </div>
        <ol class="mt-4 space-y-4">
          <li
            v-for="phase in phases"
            :key="phase.number"
            class="flex flex-col gap-3 border-b border-surface-border pb-4 last:border-b-0 last:pb-0 md:flex-row md:items-start md:justify-between"
          >
            <div class="space-y-1">
              <p class="text-sm font-semibold text-slate-100">
                Phase {{ phase.number.toLocaleString() }} · {{ phase.title }}
              </p>
              <p class="text-sm text-slate-400">{{ phase.summary }}</p>
            </div>
            <span
              class="w-fit rounded-full border px-3 py-1 text-xs font-semibold"
              :class="statusClassFor(phase.status)"
            >
              {{ phase.status }}
            </span>
          </li>
        </ol>
      </div>

      <div class="rounded-2xl border border-surface-border bg-surface-card p-6">
        <h3 class="text-lg font-semibold text-slate-100">Phase 2 deliverables</h3>
        <p class="mt-2 text-sm text-slate-400">
          Data-model setup in progress to support dashboards, filters, and analytics.
        </p>
        <ul class="mt-4 space-y-4">
          <li v-for="item in phaseTwoDeliverables" :key="item.title" class="flex gap-3">
            <span class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500"></span>
            <div>
              <p class="text-sm font-semibold text-slate-100">{{ item.title }}</p>
              <p class="text-sm text-slate-400">{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
