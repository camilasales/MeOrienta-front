<template>
  <div>
    <v-card>
      <profileUserTop :name="name" :description="description"></profileUserTop>
      <v-bottom-navigation
        background-color="#d9d9d9"
        :value="value"
        color="#ff004e"
        :input-value="active"
      >
        <v-btn>
          <span>Perfis</span>

          <v-icon>mdi-bag-checked </v-icon>
        </v-btn>

        <v-btn>
          <span>Minhas Vagas</span>

          <v-icon>mdi-calendar </v-icon>
        </v-btn>

        <v-btn>
          <span>Meus Eventos</span>

          <v-icon>mdi-domain </v-icon>
        </v-btn>
        <v-btn>
          <span>Meus Cursos</span>

          <v-icon>mdi-medal-outline </v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-card>
    <router-view />
  </div>
</template>
<script>
import profileUserTop from "@/components/profile/profileUserTop.vue";
export default {
  components: {
    profileUserTop,
  },
  data() {
    return {
      name: "CCR",
      description: "Transportando idéias",
      value: 0,
      active: true,
    };
  },
};
</script>
