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
                @click="nextCard(false)"
                label="Errei"
              />
            </div>
            <div class="btn-hit">
              <q-btn
                icon="sentiment_satisfied"
                @click="nextCard(true)"
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
import { Notify } from "quasar";
import FlashcardAPI from "src/services/resources/FlashCardAPI";
import { defineComponent } from "vue";
export default defineComponent({
  name: "FlashcardsPage",
  data() {
    return {
      currentIndex: 0,
      cards: [],
    };
  },
  created() {
    this.getFlashCards();
  },
  methods: {
    async deleteFlashcard() {
      const flashcardAPI = new FlashcardAPI();
      const flashcard = this.cards[this.currentIndex];
      const response = await flashcardAPI.deleteFlashcard(flashcard.id);
      if (response.status === 204) {
        Notify.create({
          message: "Flashcard deletado!",
          position: "top-right",
          color: "positive",
          timeout: 2000,
        });
        this.cards.splice(this.currentIndex, 1);
      }
    },
    flipCard(index) {
      this.cards[index].flipped = !this.cards[index].flipped;
    },
    nextCard(isCorrect) {
      const flashcardAPI = new FlashcardAPI();
      const flashcard = this.cards[this.currentIndex];
      if (isCorrect) {
        const flashcardUpdated = {
          correct_answers: ++flashcard.correct_answers,
        };
        flashcardAPI.updateFlashcard(flashcard.id, flashcardUpdated);
      } else {
        const flashcardUpdated = {
          wrong_answers: ++flashcard.wrong_answers,
        };
        flashcardAPI.updateFlashcard(flashcard.id, flashcardUpdated);
      }
      if (this.currentIndex < this.cards.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    async getFlashCards() {
      const flashcardAPI = new FlashcardAPI();
      const studyNormal = this.$route.query.study_normal || false;
      if (studyNormal) {
        const response = await flashcardAPI.getFlashcardStudyNormal();
        const flashcards = await response.json();
        this.cards = flashcards.map((flashcard) => {
          return {
            id: flashcard.id,
            correct_answers: flashcard.correct_answers,
            wrong_answers: flashcard.wrong_answers,
            frontContent: flashcard.question,
            backContent: flashcard.answer,
            flipped: false,
          };
        });
      } else {
        const response = await flashcardAPI.getFlashcardStudyReview();
        const flashcards = await response.json();
        this.cards = flashcards.map((flashcard) => {
          return {
            id: flashcard.id,
            correct_answers: flashcard.correct_answers,
            wrong_answers: flashcard.wrong_answers,
            frontContent: flashcard.question,
            backContent: flashcard.answer,
            flipped: false,
          };
        });
      }
    },
  },
});
</script>
