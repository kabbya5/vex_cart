
type CustomFetchOptions = {
  headers?: Record<string, string>;
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: any;
  query?: Record<string, any>;
};

import {useErrorStore} from '~/stores/error';

export const useApiFetch = async (url: string, options: CustomFetchOptions = {}) => {
  const config = useRuntimeConfig();
  const errorStore = useErrorStore();

  try {
    const isFormData = options.body instanceof FormData;

    return await $fetch(url, {
      baseURL: `${config.public.baseURL}/api`,
      method: options.method || 'GET',
      headers: {
        ...options.headers,
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
        Accept: 'application/json',
      },
      body: options.body,
      query: options.query,
    });
  } catch (err: any) {
    errorStore.setError(err);
    throw err;
  }
};