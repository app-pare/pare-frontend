<template>
  <q-page class="full-height">
    <div class="row justify-center">
      <div class="col-10 col-xs-4 col-sm-4 col-md-3">
        <div>
          <h1>
            Bem-vindo(a) ao PARE,<br />
            cadastre-se para continuar.
          </h1>
          <p class="subtitle">Já tem uma conta? <u>Faça seu login</u>.</p>
        </div>
        <div>
          <q-form @submit="submitForm">
            <label>Nome*</label>
            <q-input
              rounded
              outlined
              v-model="email"
              label="Digite seu nome"
              type="text"
            />
            <label>E-mail*</label>
            <q-input
              rounded
              outlined
              v-model="email"
              label="Digite seu e-mail"
              type="email"
            />
            <label>Senha*</label>
            <q-input
              rounded
              outlined
              v-model="password"
              label="Digite sua senha"
              type="password"
            />
            <label>Confirmação de senha<i>*</i></label>
            <q-input
              rounded
              outlined
              v-model="password"
              label="Confirme sua senha"
              type="password"
            />

            <q-btn label="Cadastrar" type="submit" class="btn full-width" />
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
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/home/user");
    },
  },
});
</script>
