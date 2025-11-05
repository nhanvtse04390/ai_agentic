<template>
  <div
    :class="[
      'flex gap-3 mb-4',
      isAgent ? 'justify-start' : 'justify-end'
    ]"
  >
    <AgentAvatar v-if="isAgent" :name="agentName" class="flex-shrink-0" />
    
    <div
      :class="[
        'rounded-lg px-4 py-3 max-w-[75%]',
        isAgent
          ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
          : 'bg-blue-500 text-white'
      ]"
    >
      <div class="text-sm font-medium mb-1" v-if="isAgent && agentName">
        {{ agentName }}
      </div>
      <div class="whitespace-pre-wrap">{{ message }}</div>
      <div class="text-xs mt-2 opacity-70">
        {{ timestamp }}
      </div>
    </div>
    
    <AgentAvatar v-if="!isAgent" :name="'You'" class="flex-shrink-0" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AgentAvatar from './AgentAvatar.vue';

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  isAgent: {
    type: Boolean,
    default: false
  },
  agentName: {
    type: String,
    default: 'Agent'
  },
  timestamp: {
    type: String,
    default: ''
  }
});

const timestamp = computed(() => {
  if (props.timestamp) return props.timestamp;
  return new Date().toLocaleTimeString('vi-VN', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
});
</script>

