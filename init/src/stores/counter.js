import { defineStore } from 'pinia'

export const useCounterStore = defineStore('main',{
  state: () => ({
    counter: 0,
    messagename:'动态设计'
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    },
    Resetmessage(value){
      this.message = value;
    }
  }
})
