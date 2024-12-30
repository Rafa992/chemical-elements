import axios from 'axios'

import { errorCatch } from './error'
import {
  getAccessToken,
  removeFromStorage
} from '@/services/auth-token.service'
import { getNewTokens } from '@/services/auth-token.service'

const options = {
  baseURL: process.env.BASE_URL || 'https://chemical-elements-api.onrender.com/api',
  // baseURL: 'http://localhost:4000/api',
  Headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true // добавление куки
}

const axiosClassic = axios.create(options)

const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
  const accessToken = getAccessToken()

  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

axiosWithAuth.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config

    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        await getNewTokens()
        return axiosWithAuth.request(originalRequest)
      } catch (error) {
        if (errorCatch(error) === 'jwt expired')removeFromStorage()
      }
    }
    throw error
  }
)

export { axiosClassic, axiosWithAuth }
