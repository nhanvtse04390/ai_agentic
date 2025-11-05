import type { Gender, Page } from './common'

export interface User {
  address: string
  created_at: string
  dob: string
  email: string
  full_name: string
  gender: Gender
  password: string
  phone_number: string
  username: string
}

export interface UserListResponse {
  content: User[]
  page: Page
}
