import type {Page} from "@/types/common.ts";

export interface Table<T> {
  header: TableHeaderItem[]
  content: T[]
  page: Page
}

export interface TableHeaderItem {
  label: string
  key: string        // ví dụ để map với field trong data
  sortable?: boolean  // nếu muốn sắp xếp
}

export const initialValue = {
  content: [],
  page: {
    number: 0,
    size: 0,
    total_elements: 0,
    total_pages: 0
  }
}
