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
            <span style="color:#000000">
              TEma
            </span>
          </v-col>
        </v-card-text>
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
