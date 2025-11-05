import { useApi } from '@/composables/useApi';
import type {UserListResponse} from "@/types";

export const getAccount = async () => {
  const { callApi } = useApi<UserListResponse[]>();
  return callApi({
    url: '/api/accounts',
    method: 'GET',
    data: [],
  });
};
