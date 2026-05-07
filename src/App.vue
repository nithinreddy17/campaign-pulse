<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppSidebar from './components/layout/AppSidebar.vue'
</script>

<template>
  <div class="flex min-h-screen bg-surface text-slate-200">
    <AppSidebar />
    <div class="flex min-h-screen flex-1 flex-col">
      <AppHeader />
      <main class="flex-1 px-6 py-6">
        <Transition name="fade" mode="out-in">
          <RouterView />
        </Transition>
      </main>
    </div>
  </div>
</template>
