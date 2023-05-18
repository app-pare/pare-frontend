<template>
  <q-page>
    <div class="page-content">
      <!-- Conteúdo da página aqui -->

      <!-- Menu móvel -->
      <q-toolbar class="mobile-menu" flat>
        <div class="q-gutter-md">
          <q-btn
            round
            dense
            flat
            icon="menu"
            class="menu-toggle"
            @click="toggleMenu"
          />
          <q-btn round dense flat icon="home" />
          <q-btn round dense flat icon="notifications" />
          <q-btn round dense flat icon="settings" />
        </div>
      </q-toolbar>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MobileMenu",
  methods: {
    toggleMenu() {
      // Lógica para alternar a exibição do menu aqui
    },
  },
});
</script>

<style scoped>
.page-content {
  height: 100vh;
}

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
</style>
