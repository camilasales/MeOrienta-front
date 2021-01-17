<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card v-if="dialog" class="px-6 py-2">
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
              Constamos que você é menor de idade.
            </h3>
            <span style="color:#000000">
              Isso não é um problema! Peça ao seu responsável que preencha esse
              formulário.
            </span>
          </v-col>
        </v-card-text>
        <v-card-actions>
          <form>
            <v-row no-gutters justify="space-around">
              <v-col cols="12">
                <v-text-field
                  outlined
                  v-model="formResponsible.name"
                  :rules="rules.name"
                  label="Nome"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  outlined
                  v-model="formResponsible.cpf"
                  :rules="rules.cpf"
                  v-mask="['###.###.###-##', '##.###.###/####-##']"
                  label="CPF"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <inputDate
                  :input="{ label: 'Data de nascimento', rules: rules.date }"
                  :picker="{ type: 'date' }"
                  v-model="formResponsible.yearOld"
                ></inputDate>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  outlined
                  v-model="formResponsible.email"
                  :rules="rules.email"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="d-flex justify-center align-center">
                <v-btn color="#ff004e" dark>
                  salvar
                </v-btn>
              </v-col>
            </v-row>
          </form>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import inputDate from "@/components/inputForm/inputDateForm.vue";
import moment from "moment";
export default {
  components: {
    inputDate,
  },
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
    return {
      formResponsible: {
        idStudent: null,
        name: "",
        cpf: "",
        yearOld: null,
        email: "",
      },
      rules: {
        email: [
          (v) => !!v || "Por favor, preeencha um e-mail válido",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        name: [(v) => !!v || "Por favor, preeencha o nome"],
        cpf: [(v) => !!v || "Por favor, preeencha o seu cpf"],
        date: [
          (v) => !!v || "Data é obrigatorio!",
          (v) => {
            let yearBirth = moment(this.form.yearOld)
              .date(1)
              .format("YYYY");
            let sub = this.dateNow - yearBirth;
            if (sub >= 13 && sub <= 15) {
              this.responsible();
              return false;
            } else if (sub <= 12) {
              return `Cadastro não permitido`;
            } else {
              console.log(v);
              return true;
            }
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
h3 {
  font-family: "Roboto Slab", serif !important;
}
</style>
