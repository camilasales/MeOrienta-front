<template>
  <v-row no-gutters justify="center" class="px-6 pt-2">
    <!-- #ff004e -->
    <v-col align-self="start" cols="12">
      <img
        :height="$vuetify.breakpoint.smAndUp ? '250' : '150'"
        :src="require('@/assets/img/logo-meorienta-rosa.svg')"
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
        <v-form ref="form" lazy-validation>
          <v-row no-gutters align-self="center" justify="center">
            <v-col cols="12">
              <v-text-field
                color="#707070"
                outlined
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                validate-on-blur
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                validate-on-blur
                color="#707070"
                outlined
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
              <v-col>
                <v-btn
                  outlined
                  class="mb-8 mr-5"
                  color="#ff004e"
                  :to="{ name: 'Index' }"
                  >Voltar</v-btn
                >
                <v-btn
                  outlined
                  class="mb-8"
                  color="#ff004e"
                  :loading="loading"
                  @click="login"
                  >Entrar</v-btn
                >
              </v-col>
              <span>Não possui cadastro? Não seja por isso!</span>
              <v-btn
                :to="{ path: '/cadastro-empresa' }"
                text
                style="border-bottom: 1px solid  #ff004e; color:#ff004e"
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
      loading: false,
      showPassword: false,
      password: "",
      passwordRules: {
        required: (value) => !!value || "Por favor, preencha a senha.",
        min: (v) => v.length >= 8 || "A senha deve ter no minímo 8 caracteres",
      },
      email: "",
      emailRules: [
        (v) => !!v || "Por favor, preeencha um e-mail válido",
        (v) => /.+@.+\..+/.test(v) || "Por favor, preeencha um e-mail válido",
      ],
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          return this.$router.push({
            path: "/perfil-empresa",
          });
        }, 4000);
      }
    },
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
  /* color: #ffffff; */
  text-decoration: inherit;
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
