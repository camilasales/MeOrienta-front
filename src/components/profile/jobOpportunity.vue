<template>
  <div>
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
              {{ isCompany ? "editar" : "candidatar" }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "profile-user-top",
  props: {
    listJobs: {
      type: Array,
      required: true,
    },
    isCompany: {
      type: Boolean,
      required: true,
      default: false,
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
