<template>
  <q-page class="full-height padding">
    <div class="row justify-center">
      <div class="col-11 col-xs-5 col-sm-7 col-md-4">
        <label for="">Minhas Coleções</label>
        <q-btn
          icon="add"
          class="btn full-width"
          label="Criar uma coleção"
          @click="goToCreateCollection"
        />
        <div>
          <q-carousel
            v-model="slideCollection"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            arrows
            height="165px"
            infinite
          >
            <q-carousel-slide name="collection01">
              <div class="my-colections">
                <h6>Primeira Coleção</h6>
                <p>00 flashcards</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="collection02">
              <div class="my-colections">
                <h6>Segunda Coleção</h6>
                <p>00 flashcards</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="collection03">
              <div class="my-colections">
                <h6>Terceira Coleção</h6>
                <p>00 flashcards</p>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="container-my-flashcards">
          <label for="">Meus Flashcards</label>
          <q-btn
            @click="goToCreateFlashCard"
            icon="add"
            class="btn full-width"
            label="Criar um flashcard"
          />
          <q-carousel
            v-model="slideFlashcard"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            arrows
            height="165px"
            infinite
          >
            <q-carousel-slide name="flashcard01">
              <div class="my-colections">
                <h6>Primeiro Flashcard</h6>
                <p>Coleção:</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="flashcard02">
              <div class="my-colections">
                <h6>Segundo Flashcard</h6>
                <p>Coleção:</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="flashcard03">
              <div class="my-colections">
                <h6>Terceiro Flashcard</h6>
                <p>Coleção:</p>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  methods: {
    goToCreateCollection() {
      this.$router.push("/home/user/create/collection");
    },
    goToCreateFlashCard() {
      this.$router.push("/home/user/create/flashcard");
    },
  },
  setup() {
    return {
      slideCollection: ref("collection01"),
      slideFlashcard: ref("flashcard01"),
    };
  },
});
</script>
