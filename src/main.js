import { createApp, watch } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import './assets/main.css'


const pinia = createPinia();


watch(
    pinia.state,
    (state) => {
      // persist the whole state to the local storage whenever it changes
      console.log(state);
    },
    { deep: true }
)



const app = createApp(App)

app.use(pinia)
app.mount('#app')


