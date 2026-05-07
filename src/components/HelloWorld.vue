<script setup>
import { computed, ref } from 'vue'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import vueLogo from '../assets/vue.svg'

const phases = [
  {
    title: 'Discovery & goals',
    description: 'Align on objectives, KPIs, and timelines for the campaign.',
  },
  {
    title: 'Audience research',
    description: 'Identify segments, personas, and the best channels to reach them.',
  },
  {
    title: 'Message strategy',
    description: 'Craft positioning, offers, and a consistent narrative.',
  },
  {
    title: 'Creative concepts',
    description: 'Develop visual directions and copy themes for testing.',
  },
  {
    title: 'Asset production',
    description: 'Build landing pages, ads, and supporting collateral.',
  },
  {
    title: 'Channel setup',
    description: 'Configure tracking, targeting, and measurement.',
  },
  {
    title: 'Soft launch',
    description: 'Roll out to a limited audience to validate performance.',
  },
  {
    title: 'Optimization sprint',
    description: 'Iterate on learnings from the initial launch data.',
  },
  {
    title: 'Scale up',
    description: 'Expand budget and reach once the metrics are steady.',
  },
  {
    title: 'Post-campaign review',
    description: 'Summarize results and capture insights for the next cycle.',
  },
]

const visibleCount = ref(1)

const visiblePhases = computed(() => phases.slice(0, visibleCount.value))
const hasMorePhases = computed(() => visibleCount.value < phases.length)

const advancePhase = () => {
  if (hasMorePhases.value) {
    visibleCount.value += 1
  }
}

const resetPhases = () => {
  visibleCount.value = 1
}
</script>

<template>
  <section id="center">
    <div class="hero">
      <img :src="heroImg" class="base" width="170" height="179" alt="" />
      <img :src="vueLogo" class="framework" alt="Vue logo" />
      <img :src="viteLogo" class="vite" alt="Vite logo" />
    </div>
    <div>
      <h1>Campaign phases</h1>
      <p>
        Start small and move through each phase instead of launching everything at once.
      </p>
    </div>
    <div class="phase-actions">
      <button type="button" class="counter" :disabled="!hasMorePhases" @click="advancePhase">
        {{ hasMorePhases ? 'Start next phase' : 'All phases started' }}
      </button>
      <button v-if="visibleCount > 1" type="button" class="secondary" @click="resetPhases">
        Restart phases
      </button>
    </div>
    <p class="phase-status">Showing {{ visibleCount }} of {{ phases.length }} phases</p>
  </section>

  <div class="ticks"></div>

  <section id="phases">
    <ol class="phase-list">
      <li v-for="(phase, index) in visiblePhases" :key="phase.title" class="phase-card">
        <span class="phase-label">Phase {{ index + 1 }}</span>
        <h2>{{ phase.title }}</h2>
        <p>{{ phase.description }}</p>
      </li>
    </ol>
  </section>

  <div class="ticks"></div>
  <section id="spacer"></section>
</template>
