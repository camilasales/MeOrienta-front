<template>
  <div>
    <v-col v-if="createNotice == false">
      <v-btn @click="createNotice = true" class="ml-1" outlined
        >Criar anúncio</v-btn
      >
    </v-col>
    <jobOpportunity
      v-if="createNotice == false"
      :listJobs="listJobs"
      :isCompany="true"
    ></jobOpportunity>
    <v-col v-else>
      <v-btn @click="createNotice = false" color="#000000" text class="px-0">
        <v-icon color="#000000">mdi-chevron-left</v-icon> voltar</v-btn
      >
      <div class="mt-2">
        <form>
          <v-row no-gutters justify="space-around">
            <v-col cols="12">
              <v-text-field
                outlined
                v-model="form.title"
                :rules="rules.title"
                label="Título da vaga"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                v-model="form.specialty"
                :rules="rules.specialty"
                label="Especialidade"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                v-model="form.salary"
                :rules="rules.salary"
                label="Salário"
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

            <v-col cols="12">
              <v-text-field
                outlined
                v-model="form.state"
                :rules="rules.state"
                label="Estado"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                v-model="form.city"
                :rules="rules.city"
                label="Cidade"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                v-model="form.description"
                :rules="rules.description"
                label="Descrição"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                v-model="form.benefits"
                :rules="rules.benefits"
                label="Beneficíos"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                v-model="form.requirements"
                :rules="rules.requirements"
                label="Requisitos"
                required
              ></v-text-field>
            </v-col>
            <!-- <v-col>
              <p>Escolha uma capa</p>
              <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
              <label for="imageUpload"></label>
            </v-col> -->

            <v-col cols="12">
              <v-checkbox
                dense
                hide-details
                hint
                v-model="form.isConfidential"
                label="Publicar como confidencial"
              ></v-checkbox>
              <v-checkbox
                dense
                hint
                hide-details
                v-model="form.isYoungerAge"
                label="Restringir para menores de idade"
              ></v-checkbox>
            </v-col>
            <v-col
              cols="10"
              class="d-flex flex-column justify-center align-center mt-6"
            >
              <v-btn
                class="mb-2"
                block
                @click="saveForm()"
                color="#ff004e"
                dark
              >
                publicar
              </v-btn>
              <v-btn class="mb-2" block outlined>
                salvar rascunho
              </v-btn>
              <v-btn class="mb-2" block text @click="createNotice = false">
                cancelar publicaçaõ
              </v-btn>
            </v-col>
          </v-row>
        </form>
      </div>
    </v-col>
  </div>
</template>
<script>
import jobOpportunity from "@/components/profile/jobOpportunity.vue";
export default {
  components: {
    jobOpportunity,
  },
  data() {
    return {
      createNotice: false,
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
      form: {
        title: "",
        specialty: "",
        salary: "",
        adress: "",
        state: "",
        city: "",
        description: "",
        benefits: "",
        requirements: "",
        youngerAge: false,
        isConfidential: false,
      },
      rules: {
        title: [(v) => !!v || "Por favor, preeencha o título da vaga"],
        specialty: [(v) => !!v || "Por favor, preeencha a especialidadee"],
        salary: [(v) => !!v || "Por favor, preeencha o salário"],
        adress: [(v) => !!v || "Por favor, preeencha o endereco"],
        state: [(v) => !!v || "Por favor, preeencha o estado"],
        city: [(v) => !!v || "Por favor, preeencha a cidade"],
        description: [(v) => !!v || "Por favor, preeencha a descrição"],
        benefits: [(v) => !!v || "Por favor, preeencha os beneficios"],
        requirements: [(v) => !!v || "Por favor, preeencha os requisitos"],
      },
    };
  },
};
</script>
