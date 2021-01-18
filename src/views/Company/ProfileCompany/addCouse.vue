<template>
  <div>
    <v-col>
      <v-btn color="#000000" text class="px-0">
        <v-icon color="#000000">mdi-chevron-left</v-icon> voltar</v-btn
      >
      <div class="mt-2">
        <v-form ref="form">
          <v-row no-gutters justify="space-around">
            <v-col cols="12">
              <v-text-field
                outlined
                v-model="form.title"
                :rules="rules.title"
                label="Título da curso"
                required
                validate-on-blur
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                v-model="form.description"
                :rules="rules.description"
                label="Descrição"
                required
                validate-on-blur
              ></v-textarea>
            </v-col>

            <v-col cols="12">
              <v-checkbox
                dense
                hint
                hide-details
                v-model="form.isYoungerAge"
                label="Restringir para menores de idade"
              ></v-checkbox>
            </v-col>
            <v-col
              cols="10"
              class="d-flex flex-column justify-center align-center mt-6"
            >
              <v-btn
                class="mb-2"
                block
                @click="createCourse()"
                color="#ff004e"
                dark
                :loading="loading"
              >
                publicar
              </v-btn>
              <v-btn class="mb-2" block outlined>
                salvar rascunho
              </v-btn>
              <v-btn class="mb-2" block text @click="createNotice = false">
                cancelar publicaçaõ
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </v-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      createNotice: false,
      itemsFormation: ["Palestra", "Seminário", "Visita Técnica", "Workshop"],
      form: {
        type: "",
        title: "",
        description: "",
        isYoungerAge: false,
      },
      rules: {
        title: [(v) => !!v || "Por favor, preeencha o titulo"],
        description: [(v) => !!v || "Por favor, preeencha a descrição"],
      },
    };
  },
  methods: {
    createCourse() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 4000);
      }
    },
  },
};
</script>
