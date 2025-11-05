<template>
  <AdminLayout>
    <div class="space-y-5 sm:space-y-6">
      <ComponentCard title="Quản lý tài khoản">
        <BasicTableOne
          :header="header"
          :content="data.content"
          :page="data.page"
          @update:page="handlePageChange"
        >
          <template #cell-email="{ value }">
            <a :href="`mailto:${value}`" class="text-blue-600 underline">
              {{ value }}
            </a>
          </template>
        </BasicTableOne>
      </ComponentCard>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from "@/components/layout/AdminLayout.vue";
import ComponentCard from "@/components/common/ComponentCard.vue";
import BasicTableOne from "@/components/tables/basic-tables/BasicTableOne.vue";
import {onMounted, ref,} from "vue";
import {initialValue, type TableHeaderItem, type UserListResponse} from "@/types/index.js";
import {getAccount} from "@/api/user.api.ts";

const header: TableHeaderItem[] = [
  {label: 'username', key: 'username'},
  {label: 'gender', key: 'gender'},
  {label: 'full_name', key: 'full_name'},
  {label: 'dob', key: 'dob'},
  {label: 'created_at', key: 'created_at'}
]

const handlePageChange = (newPage: number | string) => {
  console.log("Chuyển sang trang:", newPage)
  // call API với page mới
}

const data = ref<UserListResponse>(initialValue)
onMounted(async () => {
  const res = await getAccount()
  if (res.status === 200) {
    // API trả về array, nhưng data.value expect object
    // Nếu API trả về array, lấy phần tử đầu tiên hoặc merge
    if (Array.isArray(res.data) && res.data.length > 0) {
      data.value = res.data[0] as UserListResponse
    } else if (res.data && !Array.isArray(res.data)) {
      data.value = res.data as UserListResponse
    }
    console.log("data", res)
  }
})
</script>
