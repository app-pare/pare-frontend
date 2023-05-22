<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="router-view-container">
        <router-view />
      </div>
      <!-- Header mobile -->
      <q-toolbar class="header-mobile">
        <q-toolbar-title class="text-center">Bem-vindo(a)!</q-toolbar-title>
      </q-toolbar>
      <!-- Menu móvel -->
      <q-toolbar class="mobile-menu" flat>
        <div class="justify-between">
          <q-btn round dense flat icon="home" @click="goToHome" />
          <q-btn round dense flat icon="class" @click="goToClasses" />
          <q-btn round dense flat icon="add" @click="goToAdd" />
          <q-btn round dense flat icon="favorite" @click="goToFavorites" />
          <q-btn round dense flat icon="person" @click="goToSearch" />
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
      this.$router.push("/home/user");
    },
    goToClasses() {
      this.$router.push("/home/user/study");
    },
    goToAdd() {
      this.$router.push("/home/user/options");
    },
    goToFavorites() {
      this.$router.push("/home/user/options");
    },
    goToSearch() {
      this.$router.push("/home/user/options");
    },
  },
});
</script>
