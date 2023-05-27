<template>
  <q-page class="full-height">
    <div class="row justify-center">
      <div class="col-10 col-xs-4 col-sm-4 col-md-3">
        <q-form @submit="submitForm">
          <div>
            <label>Nome da coleção</label>
            <q-input
              rounded
              outlined
              label="Nome da coleção"
              v-model="nomeColecao"
              autofocus
              required
            ></q-input>
            <label>Incluir flashcards</label>
            <q-select
              rounded
              outlined
              v-model="flashcardsSelected"
              :options="flashcardsOptions"
              label="Selecione..."
              multiple
            />
            <!-- <label>Data do exame (opcional)</label>
            <q-input
              rounded
              outlined
              type="date"
              label="Data do exame (opcional)"
              v-model="dataExame"
            ></q-input> -->
            <!-- <label>Cor</label>
            <div class="color-select">
              <q-radio
                keep-color
                v-model="corSelecionada"
                val="#f44336"
                color="red"
              ></q-radio>
              <q-radio
                keep-color
                v-model="corSelecionada"
                val="#e91e63"
                color="pink"
              ></q-radio>
              <q-radio
                keep-color
                v-model="corSelecionada"
                val="blue"
                color="blue"
              ></q-radio>
              <q-radio
                keep-color
                v-model="corSelecionada"
                val="purple"
                color="purple"
              ></q-radio>
              <q-radio
                keep-color
                v-model="corSelecionada"
                val="amber"
                color="amber"
              ></q-radio>
              <q-radio
                keep-color
                v-model="corSelecionada"
                val="cyan"
                color="cyan"
              ></q-radio>
              <q-radio
                keep-color
                v-model="corSelecionada"
                val="teal"
                color="teal"
              ></q-radio>
            </div> -->
            <div>
              <q-btn
                type="submit"
                color="primary"
                label="Cadastrar coleção"
                class="btn full-width"
              />
            </div>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Notify } from "quasar";
import CollectionAPI from "src/services/resources/CollectionAPI";
import FlashcardAPI from "src/services/resources/FlashCardAPI";
import CollectionFlashCardAPI from "src/services/resources/FlashCollectionAPI";

export default {
  data() {
    return {
      nomeColecao: "",
      flashcardsSelected: [],
      flashcardsOptions: [],
      // dataExame: "",
      // corSelecionada: "",
    };
  },
  mounted() {
    this.getFlashcards();
  },
  methods: {
    async submitForm() {
      const collectionAPI = new CollectionAPI();
      const collectionFlashCardAPI = new CollectionFlashCardAPI();
      const collection = {
        user_id: 5,
        name: this.nomeColecao,
      };
      let response = await collectionAPI.createCollection(collection);
      if (response.status === 201) {
        const collectionCreated = await response.json();
        const collection_id = collectionCreated.id;
        this.flashcardsSelected.forEach(async (flashcardsSelected) => {
          const collectionFlashcard = {
            flashcard_id: flashcardsSelected.value,
            collection_id: collection_id,
            user_id: 5,
          };

          await collectionFlashCardAPI.createFlashCardCollection(
            collectionFlashcard
          );
        });
        Notify.create({
          message: "Coleção criada!",
          position: "top-right",
          color: "positive",
          timeout: 2000,
        });
      }
    },
    async getFlashcards() {
      const flashcardAPI = new FlashcardAPI();
      const response = await flashcardAPI.getFlashcards();
      const flashcards = await response.json();
      this.flashcardsOptions = flashcards.map((flashcard) => ({
        label: flashcard.question,
        value: flashcard.id,
        checked: false,
      }));
    },
  },
};
</script>
