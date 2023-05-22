<template>
  <q-page class="full-height">
    <div class="row justify-center align-center">
      <div class="col-10 col-xs-4 col-sm-4 col-md-3">
        <div>
          <h1>
            Bem-vindo(a) ao PARE, <br />
            faça login para continuar.
          </h1>
          <p class="subtitle">
            Ainda não tem conta? <a>Cadastre-se aqui</a>. <br />
            Leva menos de um minuto.
          </p>
        </div>
        <div>
          <q-form @submit="submitForm">
            <label>E-mail<span>*</span></label>
            <q-input
              rounded
              outlined
              v-model="email"
              label="Digite seu e-mail"
              type="email"
            />
            <label class="input-header">Senha<span>*</span></label>
            <q-input
              rounded
              outlined
              v-model="password"
              label="Digite sua senha"
              type="password"
            />
            <q-btn label="Login" type="submit" class="btn full-width" />
            <div class="text-center"><a>Esqueceu sua senha?</a></div>
          </q-form>
        </div>
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
      this.$router.push("/home/user");
    },
  },
});
</script>
