import { createApp, h, provide } from 'vue'
import { createPinia } from 'pinia'
import vClickOutside from 'click-outside-vue3'
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'
import router from './router'
import './assets/styles/main.scss'
import { apolloClient } from '@/graphql/apollo'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

app.use(vClickOutside)
app.use(createPinia())
app.use(router)

app.mount('#app')

console.info('🛠️CONTRIBUTE ON GITHUB: https://github.com/MartinsOnuoha/what-should-i-design')
