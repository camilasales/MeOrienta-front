<template>
  <div>
    <v-card width="auto" color="#707070">
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="body-1">
            <span class="span-color">
              João Augusto da Silva
            </span>
          </v-list-item-title>
          <v-list-item-subtitle class="caption">
            <span class="span-color">
              Estudante do ensino médio; artista; músico
            </span>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-btn text><v-icon color="#ffffff">mdi-cog </v-icon></v-btn>
      </v-list-item>

      <v-card-actions tions>
        <v-row no-gutters justify="center" align="center">
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-row>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <div class="d-flex flex-column align-center justify-center">
            <v-row justify="center" class="px-0">
              <v-col
                cols="7"
                md="4"
                lg="4"
                class="d-flex align-center justify-start"
              >
                <img :src="require('@/assets/img/3.png')" />
                <router-link
                  class="subtitle ml-3 span-color"
                  :to="{ name: 'VocationalTest' }"
                  >Teste vocacional</router-link
                >
              </v-col>
              <v-col
                cols="7"
                md="4"
                lg="4"
                class="d-flex align-center  justify-start"
              >
                <img :src="require('@/assets/img/2.png')" />
                <span class="subtitle ml-3 span-color"> Currículo pdf</span>
              </v-col>
              <v-col
                cols="7"
                md="4"
                lg="4"
                class="d-flex align-center  justify-start"
              >
                <img :src="require('@/assets/img/1.png')" />
                <span class="subtitle ml-3 span-color"> Comunidade</span>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-expand-transition>
      <v-bottom-navigation
        background-color="#d9d9d9"
        :value="value"
        color="#ff004e"
        :input-value="active"
      >
        <v-btn>
          <span>Vagas</span>

          <v-icon>mdi-bag-checked </v-icon>
        </v-btn>

        <v-btn>
          <span>Eventos</span>

          <v-icon>mdi-calendar </v-icon>
        </v-btn>

        <v-btn>
          <span>Empresa</span>

          <v-icon>mdi-domain </v-icon>
        </v-btn>
        <v-btn>
          <span>Curoso</span>

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

    <v-row no-gutters class="px-4">
      <v-col
        cols="12"
        md="3"
        lg="3"
        sm="5"
        v-for="(item, index) in listJobs"
        :key="index"
      >
        <v-card width="300" class="mb-6 mr-6">
          <v-img
            class="white--text align-end"
            :height="$vuetify.breakpoint.smAndUp ? '200' : 'auto'"
            :src="require('@/assets/img/vaga.png')"
          >
          </v-img>

          <v-card-text class="text--primary">
            <p class="headline">{{ item.name }}</p>
            <p class="pb-0 mb-0">{{ item.type }}</p>
            <p>{{ item.location }}</p>
            <v-btn class="my-4 mx-0" color="#ff004e" dark>
              candidatar
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      value: 0,
      active: true,
      listJobs: [
        {
          name: "Estágio administração",
          type: "Estágio",
          location: "Fortaleza/CE",
        },
        {
          name: "Auxiliar administrativo",
          type: "Jovem aprendiz",
          location: "Fortaleza/CE",
        },
        {
          name: "Supervisor de Atendimento ao Cliente",
          type: "Jovem aprendiz",
          location: "São Paulo/SP",
        },
        {
          name: "Auxiliar de Faturamento e Escrita Fiscal",
          type: "Jovem aprendiz",
          location: "Curitiba/Pr",
        },
      ],
    };
  },
};
</script>
<style scope>
.span-color {
  color: #ffffff !important;
  text-decoration: none;
}
</style>
