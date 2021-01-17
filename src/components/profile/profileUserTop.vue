<template>
  <div style="background-color:#707070">
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
            {{ name }}
          </span>
        </v-list-item-title>
        <v-list-item-subtitle class="caption">
          <span class="span-color">
            {{ description }}
          </span>
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-btn text><v-icon color="#ffffff">mdi-cog </v-icon></v-btn>
    </v-list-item>

    <div v-if="links != null">
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
    </div>
  </div>
</template>
<script>
export default {
  name: "profile-user-top",
  props: {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    links: {
      type: Object,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
