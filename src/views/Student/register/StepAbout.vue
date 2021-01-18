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
        <h3>Cadastro</h3>
      </div>

      <!-- passos do cadastro 1 2 -->
      <v-col cols="10" md="4" lg="4" sm="7">
        <v-stepper class="elevation-0" light>
          <v-stepper-header class="elevation-0">
            <v-stepper-step step="1"> </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2"> </v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </v-col>
    </v-col>

    <!-- texto com imagem de carregamento -->
    <v-col class="pa-0 mt-10" align-self="start" cols="12">
      <span>Sobre você</span>
    </v-col>
    <div class="mt-6">
      <v-avatar
        size="160"
        style="border: 0.7px solid #cecece !important; display:flex; position:relative"
      >
        <span class="white--text headline upload-img-profile">
          <img height="auto" :src="require('@/assets/img/picture.png')" />
          <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
        </span>
      </v-avatar>
      <label for="imageUpload"></label>
    </div>

    <!-- formulario de cadastro -->

    <v-container class="mt-12">
      <v-form ref="form" lazy-validation>
        <v-row no-gutters justify="space-around">
          <v-col cols="12">
            <v-text-field
              outlined
              v-model="form.email"
              :rules="rules.email"
              label="E-mail"
              required
              validate-on-blur
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              validate-on-blur
              outlined
              v-model="form.password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[passwordRules.required, passwordRules.min]"
              :type="showPassword ? 'text' : 'password'"
              name="input-10-1"
              label="Senha"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              v-model="form.name"
              :rules="rules.name"
              label="Nome"
              required
              validate-on-blur
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <inputDate
              :input="{ label: 'Data de nascimento', rules: rules.date }"
              :picker="{ type: 'date' }"
              v-model="form.yearOld"
            ></inputDate>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              v-model="form.adress"
              :rules="rules.adress"
              label="Endereço"
              required
              validate-on-blur
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              v-model="form.cpf"
              :rules="rules.cpf"
              v-mask="['###.###.###-##']"
              label="CPF"
              required
              validate-on-blur
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <span
              >Você quer se candidatar para vaga como Pessoa com
              Deficiência?</span
            >
            <v-radio-group v-model="form.deficit" row>
              <v-radio label="Sim" value="true"></v-radio>
              <v-radio label="Nâo" value="false"></v-radio>
            </v-radio-group>
          </v-col>

          <v-col cols="12" class="d-flex justify-center align-center">
            <v-btn @click="saveForm()" color="#ff004e" dark :loading="loading">
              salvar e continuar
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
    <responsibleAccount
      v-model="openResponsibleAccount"
      v-if="openResponsibleAccount"
    ></responsibleAccount>
  </div>
</template>
<script>
// import inputDate from "@src/components/inputs/inputDate.vue";
import inputDate from "@/components/inputForm/inputDateForm.vue";
import responsibleAccount from "@/components/dialogs/responsibleAccount.vue";
import moment from "moment";
export default {
  name: "StepAbout",
  components: {
    inputDate,
    responsibleAccount,
  },
  data() {
    return {
      valid: true,
      loading: false,
      openResponsibleAccount: false,
      showPassword: false,
      dateNow: moment().format("YYYY"),
      form: {
        name: "",
        email: "",
        password: "",
        yearOld: null,
        adress: "",
        cpf: "",
        deficit: "false",
      },
      rules: {
        email: [
          (v) => !!v || "Por favor, preeencha um e-mail válido",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        name: [(v) => !!v || "Por favor, preeencha o nome"],
        adress: [(v) => !!v || "Por favor, preeencha o seu endereco"],
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

      passwordRules: {
        required: (value) => !!value || "Por favor, preencha a senha.",
        min: (v) => v.length >= 8 || "A senha deve ter no minímo 8 caracteres",
      },
    };
  },

  methods: {
    responsible() {
      this.openResponsibleAccount = true;
    },
    saveForm() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          return this.$router.push({
            name: "Formacao",
          });
        }, 4000);
      }
    },
  },
};
</script>
<style scoped>
.file-image {
  margin: 100%;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
}
.upload-img-profile {
  z-index: 1;
  position: absolute;
}
</style>
