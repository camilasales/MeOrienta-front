<template>
  <div>
    <v-card>
      <profileUserTop
        :name="name"
        :description="description"
        :links="links"
      ></profileUserTop>
      <v-bottom-navigation
        background-color="#d9d9d9"
        :value="value"
        color="#ff004e"
        :input-value="active"
      >
        <v-btn @click="changeOption('/perfil-estudante', 0)">
          <span>Perfis</span>

          <v-icon>mdi-account</v-icon>
        </v-btn>

        <v-btn>
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
    <v-row v-if="value == 0 || value == 1" no-gutters class="pa-4">
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
      name: "João Augusto da Silva",
      description: "Estudante do ensino médio; artista; músico",
      links: [
        {
          name: "Teste vocacional",
          router: "teste-vocacional",
          icon: require("@/assets/img/3.png"),
        },
        {
          name: "Currículo pdf",
          router: "",
          icon: require("@/assets/img/2.png"),
        },
        {
          name: "Comunidade",
          router: "",
          icon: require("@/assets/img/1.png"),
        },
      ],
      value: 0,
      active: true,
    };
  },
  methods: {
    changeOption(pathName, valueOption) {
      this.value = valueOption;
      return this.$router.push({
        path: pathName,
      });
    },
  },
};
</script>
