import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import StepAbout from "../views/Student/register/StepAbout.vue";
import StepFormation from "@/views/Student/register/StepFormation.vue";
import ProfileEnter from "@/views/Student/ProfileStudent/ProfileEnter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: StepAbout,
  },
  {
    path: "/cadastro-formacao",
    name: "Formacao",
    component: StepFormation,
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: ProfileEnter,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
