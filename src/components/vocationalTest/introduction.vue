<template>
  <div class="px-5 pt-2 d-flex align-center justif-start flex-column">
    <v-col
      class="d-flex flex-row align-center justify-space-between pa-0"
      align-self="start"
      cols="10"
      md="12"
      lg="12"
      sm="12"
    >
      <div>
        <img
          :height="$vuetify.breakpoint.smAndUp ? '100' : '80'"
          :src="require('@/assets/img/logo-meorienta-rosa.svg')"
        />
        <h3>Teste profissional</h3>
      </div>

      <!-- passos do cadastro 1 2 -->
      <v-col cols="10" md="4" lg="4" sm="7">
        <v-btn small absolute top right icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-col>

    <v-col class="pa-0 mt-10" align-self="start" cols="12">
      <p>
        Para começar a sua jornada de autoconhecimento, atribua pontos a cada
        uma das alternativa a seguir e reflita sobre a profissão que mais deu
        Match.
      </p>
      <div class="d-flex flex-column">
        <span class="body-2"
          >3 para alternativa que você mais se identifica</span
        >
        <span class="body-2">2 para aquela que tem a ver com você</span>
        <span class="body-2">1 para a que tem um pouco a ver com você</span>
        <span class="body-2">0 para aquela que nada tem a ver com você. </span>
        <span style="color:#ff004e" class="body-2"
          >Se ficar em dúvida, não responda.</span
        >
      </div>
    </v-col>
    <v-row class="mt-16">
      <!-- passos do cadastro 1 2 -->
      <v-col>
        <v-btn outlined :to="{ name: 'Perfil' }">
          voltar
        </v-btn>
      </v-col>
      <v-col>
        <v-btn color="#ff004e" dark @click="openTestWarning = true">
          começar
        </v-btn>
      </v-col>
    </v-row>
    <testWarning v-model="openTestWarning" v-if="openTestWarning"></testWarning>
  </div>
</template>
<script>
import testWarning from "./testWarning.vue";
export default {
  components: {
    testWarning,
  },
  data() {
    return {
      openTestWarning: false,
    };
  },
};
</script>
<style scoped></style>
