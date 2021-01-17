import Vue from "vue";
import VueRouter from "vue-router";
// import views Student
import StepAbout from "../views/Student/register/StepAbout.vue";
import StepFormation from "@/views/Student/register/StepFormation.vue";
import ProfileEnter from "@/views/Student/ProfileStudent/ProfileEnter.vue";
import LoginCompany from "../views/LoginCompany.vue";
import LoginStudent from "../views/Login.vue";
import Index from "../views/Index.vue";

// import views Company
import RegisteringCompany from "@/views/Company/register/Registering.vue";
import StepAboutCompany from "@/views/Company/register/StepAbout.vue";

// import component
import Introduction from "@/components/vocationalTest/introduction.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/",
    name: "LoginStudent",
    component: LoginStudent,
  },
  {
    path: "/",
    name: "LoginCompany",
    component: LoginCompany,
  },
  {
    path: "/cadastro",
    name: "RegisteringCompany",
    component: RegisteringCompany,
    children: [
      {
        path: "",
        component: StepAboutCompany,
      },
    ],
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
    path: "/teste-vocacional",
    name: "VocationalTest",
    component: Introduction,
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
