import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    msg: 'hello pinia',
  }),

  persist: {
    storage: sessionStorage,
  },
  actions: {
    change(msg: string) {
        this.msg = msg
    }
  }
})