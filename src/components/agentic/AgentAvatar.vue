<template>
  <div
    class="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
    :style="{ backgroundColor: avatarColor }"
  >
    {{ initials }}
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  }
});

// Tạo initials từ tên
const initials = computed(() => {
  const parts = props.name.split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return props.name.substring(0, 2).toUpperCase();
});

// Tạo màu từ tên (deterministic)
const avatarColor = computed(() => {
  if (props.color) return props.color;
  
  const colors = [
    '#3B82F6', // blue
    '#10B981', // green
    '#F59E0B', // amber
    '#EF4444', // red
    '#8B5CF6', // purple
    '#EC4899', // pink
  ];
  
  let hash = 0;
  for (let i = 0; i < props.name.length; i++) {
    hash = props.name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
});
</script>

