import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineStore } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    getters: {
        // automatically infers the return type as a number
        doubleCount(state) {
            return state.count * 2
        },
        // the return type **must** be explicitly set
        doublePlusOne(): number {
            // autocompletion and typings for the whole store ✨
            return this.doubleCount + 1
        },
    },
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    },
})