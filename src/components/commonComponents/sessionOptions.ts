import { ref, reactive } from 'vue'

export function useSession() {
  const getSession = (itemName: string) => JSON.parse(sessionStorage.getItem(itemName) || "{}")
  const setSession = (itemName: string = '', params: Object = {}) => sessionStorage.setItem(itemName, JSON.stringify(params))

  return { setSession, getSession };
}