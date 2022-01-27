// FILE: main.js

import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import App from "./App.vue"
const app = createApp(App)
app.use(Quasar, {
    plugins: {
        Notify,
    }
})

app.mount('#app')