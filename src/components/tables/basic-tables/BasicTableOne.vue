<template>
  <div
    class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div class="max-w-full overflow-x-auto custom-scrollbar">
      <table class="min-w-full">
        <!-- Header -->
        <thead>
        <tr class="border-b border-gray-200 dark:border-gray-700">
          <th
            v-for="(headerItem, index) in header"
            :key="index"
            class="px-5 py-3 text-left sm:px-6"
          >
            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
              {{ headerItem.label }}
            </p>
          </th>
        </tr>
        </thead>

        <!-- Body -->
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
        <tr
          v-for="(dataItem, rowIndex) in content"
          :key="rowIndex"
          class="border-t border-gray-100 dark:border-gray-800"
        >
          <td
            v-for="(headerItem, colIndex) in header"
            :key="colIndex"
            class="px-5 py-4 sm:px-6"
          >
            <!-- Default render -->
            <span class="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
              {{ dataItem[headerItem.key] }}
            </span>

            <!-- Custom slot render -->
            <slot
              :name="`cell-${headerItem.key}`"
              :row="dataItem"
              :value="dataItem[headerItem.key]"
            />
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <!-- Pagination -->
    <div
      v-if="page.total_pages >= 1"
      class="flex items-center justify-center gap-2 px-5 py-3 border-t border-gray-200 dark:border-gray-700"
    >
      <!-- Previous -->
      <button
        class="px-3 py-1 text-sm rounded-lg border dark:border-gray-600"
        :disabled="page.number === 1"
        @click="$emit('update:page', page.number - 1)"
      >
        Previous
      </button>

      <!-- Page numbers -->
      <template v-for="pageNum in visiblePages" :key="pageNum">
    <span
      v-if="pageNum === '...'"
      class="px-3 py-1 text-sm text-gray-500"
    >
      ...
    </span>
        <button
          v-else
          class="px-3 py-1 text-sm rounded-lg border"
          :class="pageNum === page.number ? 'bg-gray-800 text-white dark:bg-gray-200 dark:text-black' : ''"
          @click="typeof pageNum === 'number' && $emit('update:page', pageNum)"
        >
          {{ pageNum }}
        </button>
      </template>

      <!-- Next -->
      <button
        class="px-3 py-1 text-sm rounded-lg border dark:border-gray-600"
        :disabled="page.number === page.total_pages"
        @click="$emit('update:page', page.number + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Page, TableHeaderItem} from '@/types'
import {computed} from "vue";

interface Props<T extends Record<string, any>> {
  header: TableHeaderItem[]
  content: T[]
  page: Page
}

const props = defineProps<Props<any>>()
defineEmits<{
  (e: 'update:page', page: number): void
}>()

// Tính toán các page cần hiển thị
const visiblePages = computed<(number | string)[]>(() => {
  const total = props.page.total_pages
  const current = props.page.number
  const delta = 2 // số trang hiển thị xung quanh current
  const pages: (number | string)[] = []

  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else {
    pages.push(1)

    if (current - delta > 2) {
      pages.push('...')
    }

    for (
      let i = Math.max(2, current - delta);
      i <= Math.min(total - 1, current + delta);
      i++
    ) {
      pages.push(i)
    }

    if (current + delta < total - 1) {
      pages.push('...')
    }

    pages.push(total)
  }

  return pages
})
</script>
