<template>
  <q-page class="full-height">
    <div>
      <div class="row justify-center">
        <div class="col-10 col-xs-5 col-sm-5 col-md-4">
          <q-btn icon="add" class="btn full-width" label="Criar uma coleção" />
          <q-btn class="my-colections full-width" label="Minhas coleções" />
          <q-btn class="my-flashcads full-width" label="Meus flashcards" />
          <q-card class="my-card">
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
export default {
  methods: {
    createCollection() {
      this.$router.push("/home/user/collection");
    },
    createFlashCard() {
      this.$router.push("/home/user/create/flashcard");
    },
  },
};
</script>

<style scoped>
.page-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.q-gutter-md > * {
  margin-bottom: 1rem;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-name {
  margin-right: 0.5rem;
}

.user-icon {
  margin-left: 0.5rem;
}

.home-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-item {
  margin-bottom: 1rem;
}

.q-mt-md {
  margin-top: 1rem;
}
</style>
