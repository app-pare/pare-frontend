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
          <q-btn color="primary" label="Login" type="submit" class="q-mt-md" />
          <div class="q-mt-md">Esqueceu sua senha?</div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // Lógica para lidar com o envio do formulário
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

.q-mt-md {
  margin-top: 1rem;
}
</style>
