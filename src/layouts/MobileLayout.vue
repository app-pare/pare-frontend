<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <!-- Menu móvel -->
      <q-toolbar class="mobile-menu" flat>
        <div class="q-gutter-md justify-center">
          <q-btn round dense flat icon="home" v-on:click="goToHome" />
          <q-btn round dense flat icon="class" v-on:click="goToClasses" />
          <q-btn round dense flat icon="add" v-on:click="goToAdd" />
          <q-btn round dense flat icon="favorite" v-on:click="goToFavorites" />
          <q-btn round dense flat icon="search" v-on:click="goToSearch" />
        </div>
      </q-toolbar>

      <!-- Conteúdo da página -->
      <div class="router-view-container">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MobileLayout",
  methods: {
    goToHome() {
      this.$router.push("/home");
    },
    goToClasses() {
      this.$router.push("/register");
    },
    goToAdd() {
      this.$router.push("/");
    },
    goToFavorites() {
      this.$router.push("/");
    },
    goToSearch() {
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f5f5f5;
  border-top: 1px solid #ccc;
}

.menu-toggle {
  margin: 0 0.5rem;
}

.justify-center {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.router-view-container {
  margin-bottom: 48px; /* Espaçamento para evitar que o conteúdo fique oculto pelo menu */
}

.q-btn--flat:focus,
.q-btn--flat.q-focus-helper {
  outline: none !important;
}
</style>
