import { type Ref, ref } from 'vue'

export type OgItem = {
  ogUrl?: string
  requestUrl?: string
  ogTitle?: string
  ogDescription?: string
  success?: boolean
  ogImage?: { url: string }[]
}
export function useValidateOgUrl() {
  const loading = ref(false)
  const data: Ref<{ error: boolean; data: OgItem } | null> = ref(null)
  const error = ref(null)

  const validate = (url: string) => {
    loading.value = true
    fetch(`${import.meta.env.VITE_APP_OPG_URL}?url=${url}`)
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
      .finally(() => (loading.value = false))
  }

  return {
    validate,
    loading,
    data,
    error
  }
}
