import { createApp } from 'vue';
import Unicon from 'vue-unicons';
import { uniSearch } from 'vue-unicons/dist/icons';
import App from './App.vue';
import './assets/global.css';

Unicon.add(uniSearch);

createApp(App)
  .use(Unicon, {
    fill: 'grey',
    height: 15,
    width: 15,
    padding: 20,
  })
  .mount('#app');
