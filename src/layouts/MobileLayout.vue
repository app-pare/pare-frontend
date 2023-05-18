<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <!-- Menu móvel -->
      <q-toolbar class="mobile-menu" flat>
        <div class="q-gutter-md justify-center">
          <q-btn round dense flat icon="home" />
          <q-btn round dense flat icon="class" />
          <q-btn round dense flat icon="add" />
          <q-btn round dense flat icon="favorite" />
          <q-btn round dense flat icon="search" />
        </div>
      </q-toolbar>

      <!-- Conteúdo da página -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MobileLayout",
  methods: {},
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
</style>
