<template>
  <q-page class="full-height">
    <div class="row justify-center">
      <div class="col-10 col-xs-5 col-sm-5 col-md-4">
        <q-form @submit="submitForm">
          <h1>Nova coleção</h1>
          <div>
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
            <div>
              <label for="">Cor</label>
              <q-radio v-model="corSelecionada" val="cor1" />
              <q-radio v-model="corSelecionada" val="cor2" />
              <q-radio v-model="corSelecionada" val="cor3" />
              <q-radio v-model="corSelecionada" val="cor4" />
              <q-radio v-model="corSelecionada" val="cor5" />
              <q-radio v-model="corSelecionada" val="cor6" />
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
