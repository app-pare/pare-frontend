const routes = [
  {
    path: "/",
    component: () => import("layouts/MobileLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/register",
    component: () => import("layouts/MobileLayout.vue"),
    children: [{ path: "", component: () => import("pages/RegisterPage.vue") }],
  },
  {
    path: "/home",
    component: () => import("layouts/MobileLayout.vue"),
    children: [{ path: "", component: () => import("pages/HomePage.vue") }],
  },
  {
    path: "/home",
    component: () => import("layouts/MobileLayout.vue"),
    children: [{ path: "", component: () => import("pages/HomePage.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
