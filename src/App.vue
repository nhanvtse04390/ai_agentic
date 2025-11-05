<template>
  <ThemeProvider>
    <SidebarProvider>
      <!-- Agentic Header -->
      <AgenticHeader />
      <!-- Content with padding for fixed header -->
      <div class="pt-16">
        <RouterView />
      </div>
    </SidebarProvider>
  </ThemeProvider>
</template>

<script setup lang="ts">
import ThemeProvider from './components/layout/ThemeProvider.vue'
import SidebarProvider from './components/layout/SidebarProvider.vue'
import AgenticHeader from './components/AgenticHeader.vue'
</script>
