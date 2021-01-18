import Vue from "vue";
import VueRouter from "vue-router";

// logins
import Index from "../views/Index.vue";
import LoginCompany from "../views/LoginCompany.vue";
import LoginStudent from "../views/Login.vue";

// import views Student
import ProfileAccount from "@/views/Student/ProfileStudent/ProfileAccount.vue";
import searchJobs from "@/views/Student/ProfileStudent/searchJobs.vue";
import StepAbout from "../views/Student/register/StepAbout.vue";
import StepFormation from "@/views/Student/register/StepFormation.vue";

// import views Company
import RegisteringCompany from "@/views/Company/register/Registering.vue";
import StepAboutCompany from "@/views/Company/register/StepAbout.vue";
import ProfileEnterCompany from "@/views/Company/ProfileCompany/ProfileEnter.vue";
import candidateProfile from "@/views/Company/ProfileCompany/candidateProfile.vue";
import jobsDisponibility from "@/views/Company/ProfileCompany/jobsDisponibility.vue";
import addEvent from "@/views/Company/ProfileCompany/addEvent.vue";
import addCouse from "@/views/Company/ProfileCompany/addCouse.vue";

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

  // rotas do perfil da empresa
  {
    path: "/cadastro-empresa",
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
    path: "/perfil-empresa",
    name: "ProfileEnterCompany",
    component: ProfileEnterCompany,
    children: [
      {
        path: "",
        component: candidateProfile,
      },
      {
        path: "/empresa-perfil-vagas",
        name: "jobs-disponibility",
        component: jobsDisponibility,
      },
      {
        path: "/empresa-criar-evento",
        name: "create-events",
        component: addEvent,
      },
      {
        path: "/empresa-criar-curso",
        name: "create-course",
        component: addCouse,
      },
    ],
  },

  // rotas perfil do estudante
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
    path: "/perfil-estudante",
    name: "ProfileAccountStudent",
    component: ProfileAccount,
    children: [
      {
        path: "",
        component: searchJobs,
      },
    ],
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
