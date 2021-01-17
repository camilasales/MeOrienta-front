<template>
  <div class="px-4">
    <v-row class="d-flex aling-star justify-start">
      <v-col
        v-for="(item, i) in listCandidate"
        :key="i"
        cols="12"
        md="4"
        lg="4"
      >
        <v-card>
          <div class="d-flex flex-no-wrap justify-space-around">
            <v-avatar class="ma-3" tile>
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-avatar>
            <div>
              <v-card-title class="headline" v-text="item.name"></v-card-title>
              <v-card-text class="d-flex flex-column">
                <span class="caption text--secondary">
                  {{ item.formation }}
                </span>
                <span class="body-1">
                  {{ item.location }}
                </span>
                <span class="caption">
                  {{ item.description }}
                </span>
              </v-card-text>
              <v-card-actions>
                <v-btn color="#ff004e" dark>
                  Conectar
                </v-btn>
                <v-btn outlined>
                  Remover
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listCandidate: [
        {
          name: "Antonio da Silva",
          formation: "estudanet do ensino medio",
          location: "Fortaleza/CE",
          description: "perfil flexível",
        },
        {
          name: "Antonio da Silva",
          formation: "estudanet do ensino medio",
          location: "Fortaleza/CE",
          description: "perfil flexível",
        },
      ],
    };
  },
};
</script>
