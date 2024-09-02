import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
export default createPinia().use(createPersistedState({
    auto: false // 是否开启持久化存储
}))