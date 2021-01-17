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
        align-self="start"
        cols="12"
        align="end"
        justify="end"
        class="mb-4"
      >
        <h1 class="title-login">login</h1>
      </v-col>
      <v-col cols="12" align-self="center">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row no-gutters align-self="center" justify="center">
            <v-col cols="12">
              <v-text-field
                color="#ffffff"
                outlined
                dark
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                color="#ffffff"
                outlined
                dark
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[passwordRules.required, passwordRules.min]"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-1"
                label="Senha"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-col>
            <div class="d-flex flex-column align-center justify-center mt-2">
              <v-btn outlined color="#ffffff" class="mb-8">Entrar</v-btn>
              <span>Não possui cadastro? Não seja por isso!</span>
              <v-btn
                :to="{ name: 'Cadastro' }"
                text
                style="border-bottom: 1px solid  #000000; color:#000000"
                >Cadatre-se</v-btn
              >
            </div>
          </v-row>
        </v-form>
      </v-col>
    </div>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      valid: "",
      showPassword: false,
      password: "",
      passwordRules: {
        required: (value) => !!value || "Por favor, preencha a senha.",
        min: (v) => v.length >= 8 || "A senha deve ter no minímo 8 caracteres",
      },
      email: "",
      emailRules: [
        (v) => !!v || "Por favor, preeencha um e-mail válido",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
};
</script>
<style scoped>
.title-login {
  font-family: "Roboto Slab", serif !important;
  color: #000000;
  font-size: 8vw;
}
span {
  color: #ffffff;
  text-decoration: inherit;
}
.v-application .error--text {
  color: #ffffff !important;
  caret-color: #ffffff !important;
  border-color: #ffffff !important;
}
.v-messages__message .error--text {
  color: #ffffff !important;
  caret-color: #ffffff !important;
  border-color: #ffffff !important;
}
.error--text {
  color: rgb(0, 217, 255) !important;
}
.input__label {
  color: black;
}

@media screen and (max-width: 800px) {
  .title-login {
    font-size: 20vw;
  }
}
</style>
