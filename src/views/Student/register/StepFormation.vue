<template>
  <div class="px-5 pt-2 d-flex align-center justif-center flex-column">
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
        <h3>Formação</h3>
      </div>

      <!-- passos do cadastro 1 2 -->
      <v-col cols="10" md="4" lg="4" sm="7">
        <v-stepper class="elevation-0" light v-model="step">
          <v-stepper-header class="elevation-0">
            <v-stepper-step step="1"> </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2"> </v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </v-col>
    </v-col>

    <v-col class="pa-0 mt-10 mb-6" align-self="start" cols="12">
      <span>Sua experiência</span>
    </v-col>

    <!-- formulario de cadastro -->
    <v-container>
      <form>
        <v-row no-gutters justify="space-around">
          <v-col cols="12">
            <v-autocomplete
              v-model="formFormation.formation"
              :items="itemsFormation"
              outlined
              label="Formação"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="formFormation.formationStatus"
              :items="itemsFormationStatus"
              outlined
              label="Status"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-if="
                formFormation.formation != 'Ensino Médio' &&
                  formFormation.formation != null
              "
              outlined
              v-model="formFormation.nameCourse"
              :rules="rules.nameCourse"
              label="Nome do Curso"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              v-model="formFormation.instituition"
              :rules="rules.instituition"
              label="Nome da Instituição"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <inputDate
              :input="{ label: 'Data de Inicio', rules: rules.dateStart }"
              :picker="{ type: 'date' }"
              v-model="formFormation.dateStart"
            ></inputDate>
            <inputDate
              :input="{ label: 'Data de Fim', rules: rules.dateEnd }"
              :picker="{ type: 'date' }"
              v-model="formFormation.dateEnd"
            ></inputDate>
          </v-col>

          <v-col cols="12" class="d-flex justify-center align-center">
            <v-btn color="#ff004e" dark @click="saveForm()">
              salvar e continuar
            </v-btn>
          </v-col>
        </v-row>
      </form>
    </v-container>
  </div>
</template>
<script>
import inputDate from "@/components/inputForm/inputDateForm.vue";
import moment from "moment";
export default {
  name: "StepFormation",
  components: {
    inputDate,
  },
  data() {
    return {
      step: 2,
      valid: "",
      dateNow: moment().format("YYYY"),
      itemsFormation: ["Ensino Médio", "Ensino Técnico", "Ensino Superior"],
      itemsFormationStatus: ["Cursando", "Finalizado"],
      formFormation: {
        nameCourse: "",
        instituition: "",
        dateStart: null,
        dateEnd: null,
        formation: null,
        formationStatus: null,
      },
      rules: {
        nameCourse: [(v) => !!v || "Por favor, preeencha o curso"],
        instituition: [
          (v) => !!v || "Por favor, preeencha o nome da instituição",
        ],
        dateStart: [(v) => !!v || "Data é obrigatorio!"],
        dateEnd: [(v) => !!v || "Data é obrigatorio!"],
      },
    };
  },

  methods: {
    saveForm() {
      return this.$router.push({
        path: "/perfil-estudante",
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
