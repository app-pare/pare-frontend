const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    // children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
    children: [{ path: "", component: () => import("pages/HomePage.vue") }],
    meta: {
      hiddenMenu: true,
    },
  },
  {
    path: "/register",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/RegisterPage.vue") }],
    meta: {
      hiddenMenu: true,
    },
  },
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/HomePage.vue") }],
  },
  {
    path: "/home/user",
    component: () => import("layouts/MobileLayout.vue"),
    children: [{ path: "", component: () => import("pages/HomeUserPage.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
