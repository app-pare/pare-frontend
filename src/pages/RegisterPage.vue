<template>
  <q-page class="full-height">
    <div class="row justify-center">
      <div class="col-10 col-xs-4 col-sm-4 col-md-3">
        <div>
          <h1>
            Bem-vindo(a) ao PARE,<br />
            cadastre-se para continuar.
          </h1>
          <p class="subtitle" @click="toLogin">
            Já tem uma conta? <u>Faça seu login</u>.
          </p>
        </div>
        <div>
          <q-form @submit="submitForm">
            <label>Nome*</label>
            <q-input
              rounded
              outlined
              v-model="name"
              label="Digite seu nome"
              type="text"
              required
            />
            <label>E-mail*</label>
            <q-input
              rounded
              outlined
              v-model="username"
              label="Digite seu e-mail"
              type="email"
              required
            />
            <label>Senha*</label>
            <q-input
              rounded
              outlined
              v-model="password"
              label="Digite sua senha"
              type="password"
              required
            />
            <label>Confirmação de senha<i>*</i></label>
            <q-input
              rounded
              outlined
              v-model="passwordConfirmation"
              label="Confirme sua senha"
              type="password"
              required
            />

            <q-btn label="Cadastrar" type="submit" class="btn full-width" />
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Notify } from "quasar";
import UserAPI from "src/services/resources/UserAPI";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegisterPage",
  data() {
    return {
      name: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/");
    },
    async submitForm() {
      if (this.password !== this.passwordConfirmation) {
        Notify.create({
          message: "As senhas não coincidem.",
          position: "top-right",
          color: "negative",
          timeout: 2000,
        });
        return;
      }

      const userAPI = new UserAPI();
      const response = await userAPI.createUser({
        name: this.name,
        username: this.username,
        password: this.password,
      });
      if (response.status === 201) {
        Notify.create({
          message: "Cadastro criado com sucesso.",
          position: "top-right",
          color: "positive",
          timeout: 2000,
        });
        setTimeout(() => {
          this.$router.push("/");
        }, 2000);
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
