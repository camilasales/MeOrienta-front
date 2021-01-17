<template>
  <div class="ma-0 pa-0">
    <v-menu
      ref="menu"
      :close-on-content-click="false"
      v-model="menu"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-on="on"
          v-model="dateFormatted"
          prepend-icon="mdi-calendar"
          v-bind="$attrs.input || null"
        ></v-text-field>
      </template>
      <v-date-picker
        @input="menu = false"
        v-model="valueLocal"
        no-title
        v-bind="$attrs.picker || null"
        locale="pt-br"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "input-date",
  props: {
    value: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      menu: false,
      dateFormatted: this.formatDate(this.value),
    };
  },
  computed: {
    valueLocal: {
      get: function() {
        return this.value;
      },
      set: function(value) {
        this.dateFormatted = this.formatDate(value);
        this.$emit("input", this.parseDate(value));
      },
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return "";
      if (
        !!this.$attrs.picker.type &&
        this.$attrs.picker.type.toLowerCase() === "month"
      ) {
        return this.$moment(date, [
          "DD-MM-YYYY",
          "MM-DD-YYYY",
          "YYYY-MM-DD",
          "MM-DD-YYYY H:m:s",
          "YYYY-MM-DD H:m:s",
        ]).format("MM/Y");
      }

      return this.$moment(
        date,
        [
          "DD-MM-YYYY",
          "MM-DD-YYYY",
          "YYYY-MM-DD",
          "MM-DD-YYYY H:m:s",
          "YYYY-MM-DD H:m:s",
        ],
        "America/Sao_Paulo"
      ).format("DD/MM/Y");
    },
    parseDate(date) {
      if (!date) return "";
      let newV = this.$moment(
        date,
        [
          "DD-MM-YYYY",
          "MM-DD-YYYY",
          "YYYY-MM-DD",
          "MM-DD-YYYY H:m:s",
          "YYYY-MM-DD H:m:s",
        ],
        "America/Sao_Paulo"
      ).format("Y-MM-DD");
      return newV;
    },
  },
};
</script>

<style lang="scss" scoped></style>
