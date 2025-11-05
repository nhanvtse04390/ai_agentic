import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
  routes: [
    // Root redirect to agentic index
    {
      path: '/',
      redirect: '/agentic',
    },
    // Agentic Demos
    {
      path: '/agentic',
      name: 'AgenticIndex',
      component: () => import('../views/Agentic/Index.vue'),
      meta: { title: 'Agentic Demos' },
    },
    {
      path: '/agentic/perception',
      name: 'Perception',
      component: () => import('../views/Agentic/Perception.vue'),
      meta: { title: 'Perception Demo' },
    },
    {
      path: '/agentic/planning',
      name: 'Planning',
      component: () => import('../views/Agentic/Planning.vue'),
      meta: { title: 'Planning Demo' },
    },
    {
      path: '/agentic/tool-use',
      name: 'ToolUse',
      component: () => import('../views/Agentic/ToolUse.vue'),
      meta: { title: 'Tool Use Demo' },
    },
    {
      path: '/agentic/memory',
      name: 'Memory',
      component: () => import('../views/Agentic/Memory.vue'),
      meta: { title: 'Memory Demo' },
    },
    {
      path: '/agentic/collaboration',
      name: 'Collaboration',
      component: () => import('../views/Agentic/Collaboration.vue'),
      meta: { title: 'Collaboration Demo' },
    },
  ],
});

export default router;

router.beforeEach((to, from, next) => {
  const title = to.meta.title || to.name || 'Page';
  document.title = `${title} | Agentic Frontend Demos`;
  next();
});
