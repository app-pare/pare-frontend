<template>
  <q-page class="full-height">
    <div>
      <div class="row justify-center">
        <div class="col-10 col-xs-5 col-sm-5 col-md-4">
          <q-btn
            icon="add"
            class="btn full-width"
            label="Nova coleção ou Flashcard"
            @click="goToOptions"
          />
          <q-card class="my-card" @click="goToStudy(true)">
            <p class="text-h6">Estudar</p>
            <img src="../assets/estude.png" />
          </q-card>
          <q-card class="my-card" @click="goToStudy(false)">
            <p class="text-h6">Revisar</p>
            <img src="../assets/revisao.png" />
          </q-card>
          <q-card class="my-card">
            <p class="text-h6">Convidar amigos</p>
            <img src="../assets/apoio-suporte.png" />
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  methods: {
    goToOptions() {
      this.$router.push("/home/user/options");
    },
    goToStudy(isNormal) {
      const url = `/home/user/flashcards?${isNormal ? "study_normal=1" : ""}`;
      this.$router.push(url);
    },
  },
});
</script>
