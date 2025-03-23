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
  const error: Ref<string | null> = ref(null)

  const validate = (url: string) => {
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/

    if (!urlPattern.test(url)) {
      error.value = 'Please enter a valid URL'
      return
    }

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
