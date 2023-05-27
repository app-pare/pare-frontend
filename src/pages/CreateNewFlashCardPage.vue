<template>
  <q-page class="full-height padding">
    <div class="row justify-center align-center">
      <div class="col-10 col-xs-4 col-sm-4 col-md-3">
        <div>
          <q-form @submit="submitForm">
            <label>Pergunta</label>
            <q-input
              rounded
              outlined
              v-model="question"
              label="Adicione uma pergunta"
              type="textarea"
              required
            />
            <label>Resposta</label>
            <q-input
              rounded
              outlined
              v-model="answer"
              label="Adicione uma resposta"
              type="textarea"
              required
            />
            <label>Coleção</label>
            <q-select
              rounded
              outlined
              color="teal"
              v-model="option"
              :options="options"
              multiple
              label="Selecione..."
              required
            >
            </q-select>
            <q-btn
              label="Cadastrar flashcard"
              type="submit"
              class="btn full-width"
            />
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Notify } from "quasar";
import CollectionAPI from "src/services/resources/CollectionAPI";
import FlashcardAPI from "src/services/resources/FlashCardAPI";
import CollectionFlashCardAPI from "src/services/resources/FlashCollectionAPI";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegisterPage",
  data() {
    return {
      question: "p1",
      answer: "R1",
      option: [{ label: "Geral", value: 1, checked: true }],
      options: [],
    };
  },
  mounted() {
    this.getCollections();
  },
  methods: {
    async submitForm() {
      const flashcardAPI = new FlashcardAPI();
      const collectionFlashCardAPI = new CollectionFlashCardAPI();
      const flashcard = {
        question: this.question,
        answer: this.answer,
        user_id: 5,
      };
      let responseCreatedFlashcard = await flashcardAPI.createFlashcard(
        flashcard
      );
      if (responseCreatedFlashcard.status === 201) {
        responseCreatedFlashcard = await responseCreatedFlashcard.json();
        const flashcardId = responseCreatedFlashcard.id;
        this.option.forEach(async (collection) => {
          const collectionFlashcard = {
            flashcard_id: flashcardId,
            collection_id: collection.value,
            user_id: 5,
          };

          await collectionFlashCardAPI.createFlashCardCollection(
            collectionFlashcard
          );
        });
        Notify.create({
          message: "Flashcard criado!",
          position: "top-right",
          color: "positive",
          timeout: 2000,
        });
      }
    },
    async getCollections() {
      const collectionAPI = new CollectionAPI();
      const response = await collectionAPI.getCollections();
      const collections = await response.json();
      console.log(collections);
      this.options = collections.map((collection) => ({
        label: collection.name,
        value: collection.id,
        checked: false,
      }));
    },
  },
});
</script>
