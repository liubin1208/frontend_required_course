import { createRouter, createWebHistory } from 'vue-router';

/* const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
    meta: {
      title: '首页',
      menuOrder: 1,
    },
  },
  {
    path: '/about',
    name: 'about-index',
    component: () => import('../views/about/index.vue'),
    meta: {
      title: '关于',
      menuOrder: 10,
    },
  },
  {
    path: '/contact',
    name: 'contact-index',
    component: () => import('../views/contact/index.vue'),
    meta: {
      title: '联系',
      menuOrder: 100,
    },
  },
]; */

const pages = import.meta.glob('../views/**/page.js', {
  eager: true,
  import: 'default',
});
const comps = import.meta.glob('../views/**/index.vue');

const routes = Object.entries(pages).map(([path, meta]) => {
  const compPath = path.replace('page.js', 'index.vue');
  path = path.replace('../views', '').replace('/page.js', '') || '/';
  const name = path.split('/').filter(Boolean).join('-') || 'index';
  return {
    path,
    name,
    component: comps[compPath],
    meta,
  };
});

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
