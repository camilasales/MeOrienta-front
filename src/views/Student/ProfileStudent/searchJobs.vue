<template>
  <div>
    <jobOpportunity :listJobs="listJobs" :isCompany="false"></jobOpportunity>
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
