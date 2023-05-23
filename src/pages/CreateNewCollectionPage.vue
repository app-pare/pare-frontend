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
            ></q-input>
            <label>Incluir flashcards</label>
            <q-select
              rounded
              outlined
              label="Incluir flashcards"
              v-model="incluirFlashcards"
            >
              <q-option label="Opção 1" value="opcao1"></q-option>
              <q-option label="Opção 2" value="opcao2"></q-option>
            </q-select>
            <label>Data do exame (opcional)</label>
            <q-input
              rounded
              outlined
              type="date"
              label="Data do exame (opcional)"
              v-model="dataExame"
            ></q-input>
            <label>Cor</label>
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
