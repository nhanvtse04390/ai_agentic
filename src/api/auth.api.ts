import { useApi } from '@/composables/useApi';

interface LoginResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export const login = async (username: string, password: string, keepLoggedIn: boolean) => {
  const { callApi } = useApi<LoginResponse>();
  return callApi({
    url: '/api/auth/login',
    method: 'POST',
    data: {
      username,
      password,
      keepLoggedIn,
    },
  });
};

export const logout = async () => {
  const { callApi } = useApi();
  return callApi({
    url: '/api/auth/logout',
    method: 'POST',
  });
};
