<template>
  <q-page class="page-centered">
    <div class="q-pa-md">
      <div class="q-mb-md">
        <h6 class="text-h6">Nova coleção</h6>
      </div>
      <div class="q-gutter-md">
        <q-form @submit="submitForm">
          <div class="q-gutter-md">
            <div class="input-header">Nome da coleção</div>
            <q-input
              filled
              dense
              label="Nome da coleção"
              v-model="nomeColecao"
              autofocus
            ></q-input>
            <div class="input-header">Incluir flashcards</div>
            <q-select
              filled
              dense
              label="Incluir flashcards"
              v-model="incluirFlashcards"
            >
              <q-option label="Opção 1" value="opcao1"></q-option>
              <q-option label="Opção 2" value="opcao2"></q-option>
            </q-select>
            <div class="input-header">Data do exame (opcional)</div>
            <q-input
              filled
              dense
              label="Data do exame (opcional)"
              v-model="dataExame"
            ></q-input>
            <div class="input-header">Cor</div>
            <div class="color-select">
              <q-radio
                keep-color
                v-model="corSelecionada"
                val="red"
                color="red"
              ></q-radio>
              <q-radio
                keep-color
                v-model="corSelecionada"
                val="pink"
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
            </div>
            <q-btn class="btn-submit" type="submit" label="Cadastrar coleção" />
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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 17px;
  /* identical to box height */

  color: #000000;
}
.input-header {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #000000;
}

.color-select {
  justify-content: space-around;
}

.btn-submit {
  margin-top: 25px;
  background-color: #505050;
  color: white;
  border-radius: 15px;
  padding: 16px 75px;
}

.q-gutter-md {
  margin-top: 2rem;
}
</style>
