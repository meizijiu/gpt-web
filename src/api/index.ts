import { post } from '@/utils/request'

export function fetchSession<T>() {
  return post<T>({
    url: '/session',
  })
}

export function fetchChatConfig<T = any>() {
  return post<T>({
    url: '/config',
  })
}
