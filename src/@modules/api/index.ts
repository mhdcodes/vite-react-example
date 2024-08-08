import { stringify } from "neoqs";

type RequestParams = Record<string, any>;

const API_URL = import.meta.env.VITE_API_URL;

export const request = async <TData>(
  path: string,
  params: RequestParams = {},
  init: RequestInit = {}
) => {
  const url = new URL(`${API_URL}/${path}`);
  url.search = stringify(params, { arrayFormat: 'brackets' });

  const { headers, ...options } = init;
  const res = await fetch(url.toString(), {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    },
    method: 'GET',
    ...options
  });

  const json = await res.json();

  if (res.ok) return json as TData;

  // Handle unauthenticated response from server
  if (res.status === 401 && !window.location.href.includes('/auth')) {
    localStorage.clear();
    window.location.href = '/auth';
  }

  // if response code is >= 400 and not 401 throw an error.
  throw json as any;
}

const get = async <TData>(
  path: string,
  params: RequestParams = {},
): Promise<TData> => request<TData>(path, params);

const post = async <TData>(
  path: string,
  params: RequestParams = {},
): Promise<TData> => request<TData>(path, {}, { method: 'POST', body: JSON.stringify(params) });

const put = async <TData>(
  path: string,
  params: RequestParams = {},
): Promise<TData> => request<TData>(path, {}, { method: 'PUT', body: JSON.stringify(params) });

const remove = async <TData>(
  path: string,
  params: RequestParams = {},
): Promise<TData> => request<TData>(path, params, { method: 'DELETE' });

export default {
  get,
  post,
  put,
  delete: remove
}
