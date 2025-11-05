<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-12 text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Agentic Frontend Demos
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Minh họa 5 năng lực cốt lõi của Agentic AI trong frontend development
        </p>
      </div>

      <!-- Demo Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Perception -->
        <router-link
          to="/agentic/perception"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer group"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-2xl">
              👁️
            </div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Perception
            </h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Phân tích intent, tone, theme và mood từ input của người dùng
          </p>
          <div class="flex items-center text-blue-600 dark:text-blue-400 font-medium">
            Xem demo →
          </div>
        </router-link>

        <!-- Planning -->
        <router-link
          to="/agentic/planning"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer group"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-2xl">
              📋
            </div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
              Planning
            </h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Tạo multi-step plan và cho phép execute từng bước
          </p>
          <div class="flex items-center text-green-600 dark:text-green-400 font-medium">
            Xem demo →
          </div>
        </router-link>

        <!-- Tool Use -->
        <router-link
          to="/agentic/tool-use"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer group"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-2xl">
              🔧
            </div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
              Tool Use
            </h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            AI chọn tool và arguments, frontend thực thi tool
          </p>
          <div class="flex items-center text-purple-600 dark:text-purple-400 font-medium">
            Xem demo →
          </div>
        </router-link>

        <!-- Memory -->
        <router-link
          to="/agentic/memory"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer group"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center text-2xl">
              🧠
            </div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400">
              Memory
            </h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Short-term (session) và long-term (localStorage) memory
          </p>
          <div class="flex items-center text-yellow-600 dark:text-yellow-400 font-medium">
            Xem demo →
          </div>
        </router-link>

        <!-- Collaboration -->
        <router-link
          to="/agentic/collaboration"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer group"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center text-2xl">
              👥
            </div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400">
              Collaboration
            </h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Multi-agent collaboration để giải quyết task phức tạp
          </p>
          <div class="flex items-center text-pink-600 dark:text-pink-400 font-medium">
            Xem demo →
          </div>
        </router-link>
      </div>

      <!-- Info Section -->
      <div class="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          📝 Lưu ý
        </h3>
        <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li>• Các demo sử dụng GPT-4o-mini qua proxy API endpoint</li>
          <li>• Nếu API chưa setup, hệ thống sẽ tự động fallback về mock responses</li>
          <li>• Xem hướng dẫn setup trong file <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">AGENTIC_DEMOS_README.md</code></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component đơn giản, không cần logic
</script>

