<template>
  <q-page class="page-centered">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <div class="text-h6">Novo FlashCard</div>
      </div>
      <div class="q-gutter-md">
        <q-form @submit="submitForm">
          <div class="input-header">Pergunta</div>
          <q-input
            rounded
            outlined
            v-model="question"
            label="Adicione uma pergunta"
            type="textarea"
          />
          <div class="input-header">Resposta</div>
          <q-input
            rounded
            outlined
            v-model="answer"
            label="Adicione uma resposta"
            type="textarea"
          />
          <div class="input-header">Categoria</div>
          <q-select
            rounded
            outlined
            color="teal"
            v-model="option"
            :options="options"
            label="Label"
          >
          </q-select>
          <q-btn label="Cadastrar flashcard" type="submit" class="btn-submit" />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegisterPage",
  data() {
    return {
      question: "",
      answer: "",
      option: "",
      options: ["Geral", "Faculdade", "Trabalho", "Concurso"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/home/user/options");
    },
  },
});
</script>

<style scoped>
.page-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.text-h6 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;
  /* or 23px */
  color: #000000;
  padding-inline-end: 20px;
}

.text-subtitle2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  /* or 16px */
  color: #000000;
  padding-inline-end: 70px;
}

.input-header {
  margin-top: 25px;
  font-family: "Montserrat";
  font-style: bold;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #000000;
  margin-bottom: 5px;
}

.q-pa-md {
  padding: 1rem;
}

.q-gutter-md > * {
  margin-bottom: 1rem;
}

.btn-submit {
  margin-top: 25px;
  background-color: black;
  color: white;
  border-radius: 15px;
  width: 100%;
  padding: 16px 120px;
}
</style>
