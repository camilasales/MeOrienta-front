<template>
  <div>
    <v-dialog v-model="dialog" persistent width="560px">
      <v-card v-if="dialog" class="px-4 py-2 align-center">
        <v-card-title style=" word-break: break-word">
          <div>
            <v-btn small absolute top right icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-card-text justify="center" align="center">
          <v-col>
            <h3 style="color:#ff004e" class="ml-0 mb-4">
              Faça o teste profissional!
            </h3>
            <span style="color:#000000">
              Assim você pode se conhecer melhor, nos auxiliar a encaixar o seu
              perfil nas melhores vagas e para os melhores eventos.
            </span>
          </v-col>
        </v-card-text>
        <v-row no-gutters align="center" justify="space-between">
          <!-- passos do cadastro 1 2 -->
          <v-col class="d-flex aling-center justify-center">
            <v-btn outlined @click="dialog = false">
              mais tarde
            </v-btn>
          </v-col>
          <v-col class="d-flex aling-center justify-center">
            <v-btn color="#ff004e" dark>
              fazer agora
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
h3 {
  font-family: "Roboto Slab", serif !important;
}
</style>
