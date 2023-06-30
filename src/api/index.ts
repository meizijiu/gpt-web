import { post } from '@/utils/request'

export function fetchSession<T>() {
  return post<T>({
    url: '/session',
  })
}
