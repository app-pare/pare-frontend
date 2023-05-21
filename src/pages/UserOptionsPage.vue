<template>
  <q-page class="full-height">
    <div>
      <div class="row justify-center">
        <div class="col-10 col-xs-5 col-sm-5 col-md-4">
          <q-btn
            @click="createCollection"
            icon="add"
            class="btn full-width"
            label="Criar uma coleção"
          />
          <q-btn
            @click="createFlashCard"
            icon="add"
            class="btn full-width"
            label="Criar um flashcard"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    createCollection() {
      this.$router.push("/home/user/create/collection");
    },
    createFlashCard() {
      this.$router.push("/home/user/create/flashcard");
    },
  },
};
</script>
