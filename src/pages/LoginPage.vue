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
              v-model="username"
              label="Digite seu e-mail"
              type="email"
              required
            />
            <label class="input-header">Senha<span>*</span></label>
            <q-input
              rounded
              outlined
              v-model="password"
              label="Digite sua senha"
              type="password"
              required
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
import UserAPI from "src/services/resources/UserAPI";
import { defineComponent } from "vue";
import { Notify } from "quasar";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      username: "darkson@gmail.com",
      password: "123456789",
    };
  },
  methods: {
    async submitForm() {
      const userAPI = new UserAPI();
      const response = await userAPI.loginByUsernameAndPass({
        username: this.username,
        password: this.password,
      });
      if (response.status === 200) {
        this.$router.push("/home/user");
      } else {
        Notify.create({
          message: "Dados inválidos.",
          position: "top-right",
          color: "negative",
          timeout: 2000,
        });
      }
    },
  },
});
</script>
