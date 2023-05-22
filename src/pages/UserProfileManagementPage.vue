<template>
  <q-page class="full-height">
    <div class="row justify-center">
      <div class="col-10 col-xs-4 col-sm-4 col-md-3">
        <q-form @submit="submitForm">
          <div class="input-header">Nome*</div>
          <q-input
            rounded
            outlined
            v-model="name"
            label="Digite seu nome"
            type="text"
          />
          <div class="input-header">E-mail*</div>
          <q-input
            rounded
            outlined
            v-model="email"
            label="Digite seu e-mail"
            type="email"
          />

          <q-btn label="Salvar" type="submit" class="btn full-width" />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserProfileManagementPage",
  data() {
    return {
      name: "",
      email: "",
    };
  },
  beforeMount() {
    this.name = "Nome do backend";
    this.email = "E-mail@dobackend.com";
  },
  methods: {
    submitForm() {
      this.$router.push("/home/user");
    },
  },
});
</script>
