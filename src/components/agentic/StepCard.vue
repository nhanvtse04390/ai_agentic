<template>
  <div
    :class="[
      'border rounded-lg p-4 transition-all duration-200',
      isActive
        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
    ]"
  >
    <div class="flex items-start justify-between mb-2">
      <div class="flex items-center gap-2">
        <span
          :class="[
            'w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold',
            getStatusClass()
          ]"
        >
          {{ stepNumber }}
        </span>
        <h3 class="font-semibold text-gray-900 dark:text-gray-100">
          {{ title }}
        </h3>
      </div>
      <span
        v-if="status"
        :class="[
          'px-2 py-1 text-xs rounded',
          getBadgeClass()
        ]"
      >
        {{ status }}
      </span>
    </div>
    
    <p v-if="description" class="text-sm text-gray-600 dark:text-gray-400 mb-3">
      {{ description }}
    </p>
    
    <div v-if="result" class="mt-3 p-3 bg-gray-50 dark:bg-gray-900 rounded text-sm">
      <div class="font-medium mb-1">Kết quả:</div>
      <div class="text-gray-700 dark:text-gray-300">{{ result }}</div>
    </div>
    
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  stepNumber: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: 'pending' // pending, running, completed
  },
  result: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

function getStatusClass() {
  switch (props.status) {
    case 'completed':
      return 'bg-green-500 text-white';
    case 'running':
      return 'bg-blue-500 text-white animate-pulse';
    default:
      return 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300';
  }
}

function getBadgeClass() {
  switch (props.status) {
    case 'completed':
      return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
    case 'running':
      return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
    default:
      return 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400';
  }
}
</script>

