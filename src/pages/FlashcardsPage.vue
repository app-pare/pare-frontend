<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-10 col-xs-5 col-sm-7 col-md-4">
        <div>
          <div class="btn-actions">
            <q-btn
              class="edit-flashcard"
              icon="edit_note"
              @click="editFlashcard"
            />
            <q-btn
              class="delete-flashcard"
              icon="delete_forever"
              @click="deleteFlashcard"
            />
          </div>
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="card"
            v-show="currentIndex === index"
            :class="{ flipped: card.flipped }"
            @click="flipCard(index)"
            swipeable
            animated
          >
            <div class="card-front">
              <p>{{ card.frontContent }}</p>
              <span>Clique para ver a resposta</span>
            </div>
            <div class="card-back">
              <p>{{ card.backContent }}</p>
            </div>
          </div>
          <div class="container-erro-e-acerto">
            <div class="btn-error">
              <q-btn
                icon="sentiment_dissatisfied"
                @click="nextCard"
                :disable="currentIndex === cards.length - 1"
                label="Errei"
              />
            </div>
            <div class="btn-hit">
              <q-btn
                icon="sentiment_satisfied"
                @click="nextCard"
                :disable="currentIndex === cards.length - 1"
                label="Acertei"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "FlashcardsPage",
  data() {
    return {
      currentIndex: 0,
      cards: [
        {
          frontContent: "De quem é a famosa frase “Penso, logo existo”?",
          backContent: "Do filósofo francês Descartes.",
          flipped: false,
        },
        {
          frontContent: "Mais um card aqui",
          backContent: "Back do card",
          flipped: false,
        },
        {
          frontContent: "Este é o terceiro card",
          backContent: "Deu bom. Este é o verso do card",
          flipped: false,
        },
      ],
    };
  },
  methods: {
    flipCard(index) {
      this.cards[index].flipped = !this.cards[index].flipped;
    },
    nextCard() {
      if (this.currentIndex < this.cards.length - 1) {
        this.currentIndex++;
      }
    },
  },
});
</script>
