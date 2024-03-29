const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    // children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
    children: [
      { path: "/", component: () => import("pages/LoginPage.vue") },
      { path: "/login", component: () => import("pages/LoginPage.vue") },
      { path: "/register", component: () => import("pages/RegisterPage.vue") },
    ],
  },
  {
    path: "/home/user",
    component: () => import("layouts/MobileLayout.vue"),
    children: [{ path: "", component: () => import("pages/HomePage.vue") }],
  },
  {
    path: "/home/user/study",
    component: () => import("layouts/MobileLayout.vue"),
    children: [{ path: "", component: () => import("pages/StudyPage.vue") }],
  },
  {
    path: "/home/user/options",
    component: () => import("layouts/MobileLayout.vue"),
    children: [
      { path: "", component: () => import("pages/UserOptionsPage.vue") },
    ],
  },
  {
    path: "/home/user/create/collection",
    component: () => import("layouts/MobileLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/CreateNewCollectionPage.vue"),
      },
    ],
  },
  {
    path: "/home/user/create/flashcard",
    component: () => import("layouts/MobileLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/CreateNewFlashCardPage.vue"),
      },
    ],
  },
  {
    path: "/home/user/flashcards",
    component: () => import("layouts/MobileLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/FlashcardsPage.vue"),
      },
    ],
  },
  {
    path: "/home/user/profile",
    component: () => import("layouts/MobileLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/UserProfileManagementPage.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
