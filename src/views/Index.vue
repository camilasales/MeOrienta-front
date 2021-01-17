<template>
  <v-row
    no-gutters
    justify="center"
    style="background-color:#ff004e"
    class="px-6 pt-2"
  >
    <!-- #ff004e -->
    <v-col align-self="start" cols="12">
      <img
        :height="$vuetify.breakpoint.smAndUp ? '250' : '150'"
        :src="require('@/assets/img/logo-meorienta.svg')"
      />
    </v-col>
    <div>
      <v-col
        align-self="center"
        cols="12"
        align="center"
        justify="center"
        class="mb-4"
      >
        <h1 class="title-login">
          <router-link class="title-login" :to="{ name: 'LoginStudent' }"
            >Aluno</router-link
          >
        </h1>
        <h1 class="title-login">
          <router-link class="title-login" :to="{ name: 'LoginCompany' }"
            >Empresa</router-link
          >
        </h1>
      </v-col>
    </div>
  </v-row>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.title-login {
  font-family: "Roboto Slab", serif !important;
  color: #ffffff;
  font-size: 8vw;
  text-decoration: none;
  cursor: pointer;
}
.title-login:hover {
  color: #000000;
}
span {
  color: #ffffff;
  text-decoration: inherit;
}

@media screen and (max-width: 800px) {
  .title-login {
    font-size: 20vw;
  }
}
</style>
