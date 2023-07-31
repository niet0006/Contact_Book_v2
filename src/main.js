import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import ContactList from './views/ContactList.vue'
import ContactDetails from './views/ContactDetails.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ContactList,
      name: 'ContactList'
    },
    {
      path: '/contact/:id',
      component: ContactDetails,
      name: 'ContactDetails',
      props: true
    },
  ]
})

createApp(App).use(router).mount('#app')