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
      <span>Sobre a empresa</span>
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
      <form>
        <v-row no-gutters justify="space-around">
          <v-col cols="12">
            <v-text-field
              outlined
              v-model="form.email"
              :rules="rules.email"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
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
              v-model="form.nameResponsible"
              :rules="rules.nameResponsible"
              label="Nome do responsável"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              v-model="form.adress"
              :rules="rules.adress"
              label="Endereço"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              outlined
              v-model="form.businessType"
              :rules="rules.businessType"
              label="Endereço"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              v-model="form.cpfCnpj"
              :rules="rules.cpfCnpj"
              v-mask="['###.###.###-##', '##.###.###/####-##']"
              label="CPF"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              v-model="form.phone"
              :rules="rules.phone"
              v-mask="['(##)#####-####', '(##)####-####']"
              label="Telefone"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              outlined
              v-model="form.webSite"
              label="Website"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" class="d-flex justify-center align-center">
            <v-btn @click="saveForm()" color="#ff004e" dark>
              salvar e continuar
            </v-btn>
          </v-col>
        </v-row>
      </form>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "StepAbout",
  data() {
    return {
      valid: "",
      showPassword: false,
      form: {
        nameResponsible: "",
        email: "",
        password: "",
        adress: "",
        cpfCnpj: "",
        businessType: "",
        phone: "",
        webSite: "",
      },
      rules: {
        email: [
          (v) => !!v || "Por favor, preeencha um e-mail válido",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        nameResponsible: [(v) => !!v || "Por favor, preeencha o nome"],
        adress: [(v) => !!v || "Por favor, preeencha o seu endereco"],
        cpfCnpj: [(v) => !!v || "Por favor, preeencha o CPF/CNPJ"],
        businessType: [(v) => !!v || "Por favor, preeencha o ramo de atuação"],
        phone: [
          (v) => !!v || "Por favor preencha o telefone.",
          (v) => {
            v = v || "";
            return (
              v.length > 9 ||
              "O número de telefone precisa ter mais 10 digitos."
            );
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
    saveForm() {
      return this.$router.push({
        path: "/perfil-empresa",
      });
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
