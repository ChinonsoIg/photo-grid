import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PhotoDetails from '../views/PhotoDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/photos/:id',
    name: 'PhotoDetails',
    component: PhotoDetails,
    props: true,
  },
  // {
  //   path: '/photos',
  //   redirect: '/',
  //   component: Home,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
