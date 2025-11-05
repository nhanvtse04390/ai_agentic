<template>
  <div class="bg-gray-900 text-green-400 font-mono text-sm rounded-lg p-4 h-64 overflow-y-auto">
    <div
      v-for="(log, index) in logs"
      :key="index"
      class="mb-1"
    >
      <span class="text-gray-500">{{ formatTime(log.timestamp) }}</span>
      <span
        :class="[
          'ml-2',
          getLogClass(log.type)
        ]"
      >
        [{{ log.type.toUpperCase() }}]
      </span>
      <span class="ml-2">{{ log.message }}</span>
    </div>
    
    <!-- Thinking indicator -->
    <div v-if="isThinking" class="mt-2 flex items-center gap-2 text-yellow-400">
      <span class="animate-pulse">▸</span>
      <span>Agent đang suy nghĩ...</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  logs: {
    type: Array,
    default: () => []
  },
  isThinking: {
    type: Boolean,
    default: false
  }
});

function formatTime(timestamp) {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  return date.toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

function getLogClass(type) {
  switch (type) {
    case 'info':
      return 'text-blue-400';
    case 'success':
      return 'text-green-400';
    case 'warning':
      return 'text-yellow-400';
    case 'error':
      return 'text-red-400';
    default:
      return 'text-gray-400';
  }
}
</script>

