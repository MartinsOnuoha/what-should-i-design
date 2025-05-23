<script lang="ts" setup>
import { computed, defineAsyncComponent, type PropType, ref, watch } from 'vue'
import { isValidUrl } from '@/utils/util'
import { useMutation } from '@vue/apollo-composable'
import { ADD_SAMPLE } from '@/graphql/mutations/samples'
import type { Statement } from '@/entities/Statement'
import { GET_STATEMENTS } from '@/graphql/queries/statements'
import { useValidateOgUrl } from '@/composables/useValidateOgUrl'

const AppAddUrlPreview = defineAsyncComponent(
  () => import('@/components/AppAddUrl/AppAddUrlPreview.vue')
)
const AppAddUrlError = defineAsyncComponent(
  () => import('@/components/AppAddUrl/AppAddUrlSuccessError.vue')
)

const props = defineProps({
  statement: { type: Object as PropType<Statement>, required: true }
})

const inputValue = ref('')
const canCreate = computed(() => !!inputValue.value && isValidUrl(inputValue.value))

const { loading: loadingValidation, data, validate } = useValidateOgUrl()

watch(data, (n) => {
  if (!n?.error && n?.data.success) {
    addSample()
  }
})

const {
  loading: loadingMutation,
  mutate: addSample,
  error: mutationError
} = useMutation(ADD_SAMPLE, () => ({
  variables: {
    objects: {
      statement_id: props.statement?.id,
      url: inputValue.value
    }
  },
  update: (cache, { data: { insert_samples } }) => {
    let data: any = cache.readQuery({ query: GET_STATEMENTS })
    data = {
      ...data,
      statements: [...data.statements, insert_samples]
    }
    cache.writeQuery({ query: GET_STATEMENTS, data })
    inputValue.value = ''
  }
}))
</script>
<template>
  <div class="AppAddUrl font--fira">
    <label
      class="mr-3 flex-1"
      title="Add new inspiration"
      aria-label="Add new inspiration"
      for="add-url"
    >
      <input
        required
        autocomplete="off"
        name="add-url"
        v-model="inputValue"
        :disabled="loadingValidation || loadingMutation"
        placeholder="e.g https://dribbble.com/shots..."
        type="text"
      />
    </label>
    <button
      :disabled="!canCreate || loadingValidation || loadingMutation"
      @click="validate(inputValue)"
    >
      {{ loadingValidation ? 'Validating URL...' : 'Add Inspiration ✨' }}
    </button>
  </div>
  <AppAddUrlError :msg="data?.error ? 'Provided URL is invalid ❌' : ''" />
  <AppAddUrlPreview
    v-if="!data?.error && data?.data"
    :og-item="data.data"
    :loading="loadingMutation"
    :has-error="!!mutationError"
  />
</template>

<style lang="scss">
@use 'AppAddUrl.scss' as *;
@use 'AppAddUrl.dark.scss' as appAddUrlDark;

.dark-theme {
  @include appAddUrlDark.darkTheme;
}
</style>
