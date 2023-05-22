<template>
  <q-page class="page-centered">
    <div class="q-pa-md">
      <div class="q-gutter-md">
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

<style scoped>
.page-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.input-header {
  margin-top: 25px;
  font-family: "Montserrat";
  font-style: bold;
  font-weight: 700;
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
  margin-bottom: 1rem;
  width: 19rem;
}
</style>
