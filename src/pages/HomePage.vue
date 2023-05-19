<template>
  <q-page class="page-centered">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <div class="text-h6">
          Bem-vindo(a) ao PARE, faça login para continuar.
        </div>
        <div class="text-subtitle2">
          Ainda não tem conta? <u>Cadastre-se aqui</u>. Leva menos de um minuto
        </div>
      </div>
      <div class="q-gutter-md">
        <q-form @submit="submitForm">
          <div class="input-header">E-mail*</div>
          <q-input
            rounded
            outlined
            v-model="email"
            label="Digite seu e-mail"
            type="email"
          />
          <div class="input-header">Senha*</div>
          <q-input
            rounded
            outlined
            v-model="password"
            label="Digite sua senha"
            type="password"
          />
          <q-btn label="Login" type="submit" class="btn-submit" />
          <div class="q-mt-md">Esqueceu sua senha?</div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/register");
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap");
.page-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.text-h6 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 130%;
  /* or 23px */
  color: #000000;
  width: 89%;
}

.text-subtitle2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  /* or 16px */
  color: #000000;
}

.input-header {
  margin-top: 25px;
  font-family: "Montserrat";
  font-style: bold;
  font-weight: 600;
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
  margin-bottom: 4rem;
}

.btn-submit {
  margin-top: 25px;
  background-color: black;
  color: white;
  border-radius: 15px;
  width: 100%;
  padding: 16px 120px;
}
.q-mt-md {
  margin-top: 1rem;
  width: 100%;
  text-align: center;
}
</style>
