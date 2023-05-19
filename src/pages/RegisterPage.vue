<template>
  <q-page class="page-centered">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <div class="text-h6">
          Bem-vindo(a) ao PARE, faça o login para continuar.
        </div>
        <div class="text-subtitle2">
          Ainda não tem conta? Cadastre-se aqui. Leva menos de um minuto
        </div>
      </div>
      <div class="q-gutter-md">
        <q-form @submit="submitForm">
          <q-input
            outlined
            v-model="email"
            label="Nome*"
            type="text"
            placeholder="Digite seu nome"
          />
          <q-input
            outlined
            v-model="email"
            label="E-mail*"
            type="email"
            placeholder="Digite seu email"
          />
          <q-input
            outlined
            v-model="password"
            label="Senha*"
            type="password"
            placeholder="Digite sua senha"
          />
          <q-input
            outlined
            v-model="password"
            label="Confirmação de senha*"
            type="password"
            placeholder="Confirme sua senha"
          />

          <q-btn label="Cadastrar" type="submit" class="btn-submit" />
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

<style scoped>
.page-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.text-h6 {
  font-size: 1.25rem;
  font-weight: 500;
}

.text-subtitle2 {
  font-size: 0.875rem;
  font-weight: 400;
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
