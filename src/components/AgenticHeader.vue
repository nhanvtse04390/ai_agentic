<template>
  <header class="agentic-header fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm animate-fade-in">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo & Title -->
        <router-link to="/agentic" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span class="text-2xl">🤖</span>
          <span class="font-bold text-lg text-gray-900 dark:text-white">
            Agentic Frontend Demos
          </span>
        </router-link>

        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center gap-1">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            :class="{
              'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300': isActive(item.path),
              'text-gray-600 dark:text-gray-400': !isActive(item.path)
            }"
          >
            <span class="mr-1.5">{{ item.emoji }}</span>
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6 text-gray-600 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden pb-4 pt-2 border-t border-gray-200 dark:border-gray-700 animate-fade-in"
      >
        <nav class="flex flex-col gap-1">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            @click="closeMobileMenu"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            :class="{
              'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300': isActive(item.path),
              'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800': !isActive(item.path)
            }"
          >
            <span class="mr-2">{{ item.emoji }}</span>
            {{ item.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMobileMenuOpen = ref(false);

const navItems = [
  { name: 'Tổng quan', path: '/agentic', emoji: '🏠' },
  { name: 'Perception', path: '/agentic/perception', emoji: '👁️' },
  { name: 'Planning', path: '/agentic/planning', emoji: '🧩' },
  { name: 'Tool Use', path: '/agentic/tool-use', emoji: '🔧' },
  { name: 'Memory', path: '/agentic/memory', emoji: '🧠' },
  { name: 'Collaboration', path: '/agentic/collaboration', emoji: '👥' },
];

const isActive = (path) => {
  if (path === '/agentic') {
    return route.path === '/agentic';
  }
  return route.path === path;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>

