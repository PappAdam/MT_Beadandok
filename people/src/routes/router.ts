import PeopleList from "../pages/PeopleList.vue";
import ContactView from "../pages/ContactView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/emberek",
      name: "PeopleList",
      component: PeopleList,
    },
    {
      path: "/emberek/:id",
      name: "ContactView",
      component: ContactView,
      props: true,
    },
    {
      path: "/",
      redirect: "/emberek",
    },
  ],
  scrollBehavior(from, to, savedPosition) {
    return savedPosition || undefined;
  },
});

export default router;
