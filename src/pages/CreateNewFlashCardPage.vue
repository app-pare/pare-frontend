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
            />
            <label>Resposta</label>
            <q-input
              rounded
              outlined
              v-model="answer"
              label="Adicione uma resposta"
              type="textarea"
            />
            <label>Categoria</label>
            <q-select
              rounded
              outlined
              color="teal"
              v-model="option"
              :options="options"
              label="Selecione..."
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
