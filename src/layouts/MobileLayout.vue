<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="router-view-container">
        <router-view />
      </div>
      <!-- Menu móvel -->
      <q-toolbar class="mobile-menu" flat>
        <div class="q-gutter-md justify-center">
          <q-btn round dense flat icon="home" @click="goToHome" />
          <q-btn round dense flat icon="class" @click="goToClasses" />
          <q-btn round dense flat icon="add" @click="goToAdd" />
          <q-btn round dense flat icon="favorite" @click="goToFavorites" />
          <q-btn round dense flat icon="search" @click="goToSearch" />
        </div>
      </q-toolbar>
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
      this.$router.push("/home/user/flashcard");
    },
    goToAdd() {
      this.$router.push("/home/user/flashcard");
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
  margin-bottom: 56px;
}

.q-btn--flat:focus,
.q-btn--flat.q-focus-helper {
  outline: none !important;
}
</style>
