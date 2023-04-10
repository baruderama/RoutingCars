//DEFINE OUR ROUTING RULES

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Carview from "../views/Carview.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../views/404View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      redirect: "/"
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/cars/:id",
      name: "car",
      component: Carview,
      children: [
        {
          path: "contact",
          name:"contact",
          component: ContactView,
        },
      ],
    },
    {
      path:"/:catchcall(.*)*",
      name:"Not Found",
      component: NotFoundView
    }
  ],
});

export default router;
