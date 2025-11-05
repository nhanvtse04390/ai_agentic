// src/composables/useApi.ts
import { ref } from "vue";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "@/api/axios.config";

export function useApi<T = any>() {
  const data = ref<T | null>(null);
  const error = ref<any>(null);
  const loading = ref(false);
  const status = ref<number | null>(null);

  const callApi = async (config: AxiosRequestConfig) => {
    loading.value = true;
    error.value = null;
    status.value = null;

    try {
      const response: AxiosResponse<T> = await api.request<T>(config);

      data.value = response.data;
      status.value = response.status;

      return {
        data: response.data,
        status: response.status,
        headers: response.headers,
      };
    } catch (err: any) {
      status.value = err.response?.status ?? null;
      error.value = err.response?.data || err.message;

      throw {
        status: err.response?.status,
        error: error.value,
      };
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    error,
    loading,
    status,
    callApi,
  };
}
