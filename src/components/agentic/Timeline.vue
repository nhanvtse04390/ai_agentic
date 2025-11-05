<template>
  <div class="relative">
    <!-- Timeline line -->
    <div
      class="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"
    ></div>

    <!-- Steps -->
    <div class="space-y-6">
      <div
        v-for="(step, index) in steps"
        :key="step.id || index"
        class="relative flex items-start gap-4"
      >
        <!-- Step indicator -->
        <div
          :class="[
            'relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300',
            getStepClass(step.status)
          ]"
        >
          <span v-if="step.status === 'pending'">{{ index + 1 }}</span>
          <span v-else-if="step.status === 'running'" class="animate-spin">⟳</span>
          <span v-else>✓</span>
        </div>

        <!-- Step content -->
        <div class="flex-1 pt-1">
          <div class="font-semibold text-gray-900 dark:text-gray-100 mb-1">
            {{ step.name }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {{ step.description }}
          </div>
          <div
            v-if="step.result"
            class="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded text-sm"
          >
            {{ step.result }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  steps: {
    type: Array,
    required: true,
    default: () => []
  }
});

function getStepClass(status) {
  switch (status) {
    case 'completed':
      return 'bg-green-500 text-white';
    case 'running':
      return 'bg-blue-500 text-white';
    case 'pending':
      return 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300';
    default:
      return 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300';
  }
}
</script>

