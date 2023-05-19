<template>
  <q-page class="page-centered">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-form @submit="submitForm">
          <div class="q-mb-md">
            <h6 class="text-h6">Nova coleção</h6>
          </div>
          <div class="q-gutter-md">
            <q-input
              filled
              dense
              label="Nome da coleção"
              v-model="nomeColecao"
              autofocus
            ></q-input>

            <q-select
              filled
              dense
              label="Incluir flashcards"
              v-model="incluirFlashcards"
            >
              <q-option label="Opção 1" value="opcao1"></q-option>
              <q-option label="Opção 2" value="opcao2"></q-option>
            </q-select>

            <q-input
              filled
              dense
              label="Data do exame (opcional)"
              v-model="dataExame"
            ></q-input>

            <q-radio v-model="corSelecionada" val="cor1"> Cor 1 </q-radio>
            <q-radio v-model="corSelecionada" val="cor2"> Cor 2 </q-radio>
            <q-radio v-model="corSelecionada" val="cor3"> Cor 3 </q-radio>

            <q-btn type="submit" color="primary" label="Cadastrar" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      nomeColecao: "",
      incluirFlashcards: null,
      dataExame: "",
      corSelecionada: "",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/home/user");
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

.text-h6 {
  margin: 0;
}

.q-gutter-md {
  margin-top: 2rem;
}

.q-mb-md {
  margin-bottom: 1rem;
}
</style>
