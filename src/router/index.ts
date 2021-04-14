import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from "../view/Home.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../view/About.vue")
  },
  {
    path: "/home",
    name: "HomePage",
    component: () =>
      import("../view/Home/index.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../view/Login/index.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;