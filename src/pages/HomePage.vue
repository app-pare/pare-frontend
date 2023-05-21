<template>
  <q-page class="full-height">
    <div>
      <div class="row justify-center">
        <div class="col-10 col-xs-5 col-sm-5 col-md-4">
          <q-btn
            icon="add"
            class="btn full-width"
            label="Criar uma coleção"
            @click="goToCreateCollection"
          />
          <q-btn
            class="my-colections full-width"
            label="Minhas coleções"
            @click="goToCollection"
          />
          <q-btn
            class="my-flashcads full-width"
            label="Meus flashcards"
            @click="goToFlashcards"
          />
          <q-card class="my-card" @click="goToStudy">
            <p class="text-h6">Estudar</p>
            <img src="../assets/Dictionary-pana.svg" />
          </q-card>
          <q-card class="my-card">
            <p class="text-h6">Revisar</p>
            <img src="../assets/Mobile-note-list-cuate.svg" />
          </q-card>
          <q-card class="my-card">
            <p class="text-h6">Convidar amigos</p>
            <img src="../assets/Online-world-cuate.svg" />
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
    goToCreateCollection() {
      this.$router.push("/home/user/create/collection");
    },
    goToCollections() {
      this.$router.push("/home/user/collection");
    },
    goToFlashcards() {
      this.$router.push("/home/user/flashcards");
    },
    goToStudy() {
      this.$router.push("/");
    },
  },
});
</script>
