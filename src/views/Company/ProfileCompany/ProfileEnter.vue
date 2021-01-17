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
        <v-btn :to="{ path: '/perfil-empresa' }">
          <span>Perfis</span>

          <v-icon>mdi-account</v-icon>
        </v-btn>

        <v-btn :to="{ path: 'perfil-vagas' }">
          <span>Minhas Vagas</span>

          <v-icon>mdi-bag-checked </v-icon>
        </v-btn>

        <v-btn>
          <span>Meus Eventos</span>

          <v-icon>mdi-calendar</v-icon>
        </v-btn>
        <v-btn>
          <span>Meus Cursos</span>

          <v-icon>mdi-medal-outline </v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-card>
    <v-row no-gutters class="pa-4">
      <v-col>
        <v-text-field
          dense
          outlined
          label="Pesquisar ..."
          prepend-inner-icon="mdi-magnify "
          append-outer-icon="mdi-car-shift-pattern "
        ></v-text-field>
      </v-col>
    </v-row>
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
