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
            <q-carousel-slide
              v-for="collection in collections"
              :key="collection.id"
              :name="`collection${collection.id}`"
            >
              <div class="my-colections">
                <h6>{{ collection.name }}</h6>
                <p>{{ collection.flashcards.length }} flashcards</p>
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
            <q-carousel-slide
              v-for="flashcard in flashcards"
              :key="flashcard.id"
              :name="`flashcard${flashcard.id}`"
            >
              <div class="my-colections">
                <h6>{{ flashcard.name }}</h6>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CollectionAPI from "src/services/resources/CollectionAPI";
import FlashcardAPI from "src/services/resources/FlashCardAPI";
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    goToCreateCollection() {
      this.$router.push("/home/user/create/collection");
    },
    goToCreateFlashCard() {
      this.$router.push("/home/user/create/flashcard");
    },
    async getCollections() {
      const collectionAPI = new CollectionAPI();
      const response = await collectionAPI.getCollections();
      const collections = await response.json();
      const data = [];

      collections.forEach((collection, index) => {
        const element = {
          id: collection.id,
          name: collection.name,
          flashcards: [index],
        };
        data.push(element);
      });
      this.collections = data;
      if (this.collections.length) {
        this.slideCollection = `collection${data[0].id}`;
      }
    },
    async getFlashcards() {
      const flashcardAPI = new FlashcardAPI();
      const response = await flashcardAPI.getFlashcards();
      const flashcards = await response.json();
      const data = [];
      flashcards.forEach((flashcard) => {
        const element = {
          id: flashcard.id,
          name: flashcard.question,
        };
        data.push(element);
      });
      this.flashcards = data;
      if (this.flashcards.length) {
        this.slideFlashcard = `flashcard${data[0].id}`;
      }
    },
  },
  async mounted() {
    await this.getCollections();
    await this.getFlashcards();
  },
  data() {
    return {
      slideCollection: null,
      slideFlashcard: null,
      collections: [],
      flashcards: [],
    };
  },
});
</script>
