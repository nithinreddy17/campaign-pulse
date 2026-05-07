<script setup>
import { RouterLink } from 'vue-router'
import { BarChart2, LayoutDashboard, Megaphone, PlusCircle, Zap } from 'lucide-vue-next'

const navLinks = [
  { label: 'Dashboard', to: '/', icon: LayoutDashboard },
  { label: 'Campaigns', to: '/campaigns', icon: Megaphone },
  { label: 'Create Campaign', to: '/create', icon: PlusCircle },
  { label: 'Analytics', to: '/analytics', icon: BarChart2 },
]
</script>

<template>
  <aside class="flex w-60 flex-col border-r border-surface-border bg-surface-card px-4 py-6">
    <div class="flex items-center gap-2 text-brand-500">
      <Zap class="h-5 w-5" />
      <span class="text-lg font-semibold text-slate-100">CampaignPulse</span>
    </div>

    <nav class="mt-8 space-y-1">
      <RouterLink
        v-for="link in navLinks"
        :key="link.label"
        :to="link.to"
        class="block"
        v-slot="{ isActive }"
      >
        <span
          :class="[
            'flex items-center gap-3 rounded-md border-l-2 px-3 py-2 text-sm font-medium transition',
            isActive
              ? 'border-brand-500 bg-brand-600/20 text-brand-100'
              : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-slate-100',
          ]"
        >
          <component :is="link.icon" class="h-4 w-4" />
          {{ link.label }}
        </span>
      </RouterLink>
    </nav>

    <div class="mt-auto border-t border-surface-border pt-6">
      <div class="flex items-center gap-3">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-sm font-semibold"
        >
          NR
        </div>
        <div>
          <p class="text-sm font-semibold text-slate-100">Nithin Reddy</p>
          <p class="text-xs text-slate-400">Marketing Intern</p>
        </div>
      </div>
    </div>
  </aside>
</template>
