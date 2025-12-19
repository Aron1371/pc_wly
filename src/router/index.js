import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../view/home/index.vue')
    },
    {
      path: '/news',
      component: () => import('../view/news/index.vue')
    },
    {
      path: '/about',
      component: () => import('../view/about/index.vue')
    },
    {
      path: '/channel',
      component: () => import('../view/channel/index.vue')
    },
    
  ]
})

// 路由守卫：统一管理 viewport，确保在路由切换时立即设置
router.beforeEach((to, from, next) => {
  // 立即设置 viewport，不等待组件加载
  let meta = document.querySelector('meta[name="viewport"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "viewport";
    document.head.appendChild(meta);
  }
  
  // 首页和 channel 页面：使用 index.html 第6行的默认设置
  if (to.path === '/index' || to.path === '/' || to.path === '/channel') {
    meta.content = "width=device-width, initial-scale=1.0";
  } 
  // 其他页面（about、news）：手机端自动缩放显示全部内容
  else {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      // 移动设备：计算缩放比例，让页面内容完整显示在屏幕宽度内
      const deviceWidth = window.innerWidth || window.screen.width;
      const pageWidth = 1200; // 页面实际宽度
      const calculatedScale = Math.min(deviceWidth / pageWidth, 1.0);
      meta.content = `width=${pageWidth}, initial-scale=${calculatedScale}, user-scalable=yes, maximum-scale=3.0, minimum-scale=0.1`;
    } else {
      // 桌面设备：使用默认设置
      meta.content = "width=device-width, initial-scale=1.0";
    }
  }
  
  next();
});

export default router
