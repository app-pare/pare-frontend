<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <!-- Header mobile -->
      <q-toolbar class="header-mobile">
        <q-toolbar-title class="text-center"
          ><img
            class="logo-app"
            src="../assets/logo-pare.svg"
            alt="Logotipo PARE"
        /></q-toolbar-title>
      </q-toolbar>
      <div class="router-view-container">
        <router-view />
      </div>
      <!-- Menu móvel -->
      <q-toolbar class="mobile-menu" flat>
        <div class="justify-between">
          <q-btn round dense flat icon="home" @click="goToHome" />
          <q-btn round dense flat icon="add" @click="goToAdd" />
          <q-btn round dense flat icon="class" @click="goToClasses" />
          <q-btn round dense flat icon="person" @click="goToProfile" />
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
    goToProfile() {
      this.$router.push("/home/user/profile");
    },
  },
});
</script>
