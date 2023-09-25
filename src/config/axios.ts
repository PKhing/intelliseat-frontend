import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
})
