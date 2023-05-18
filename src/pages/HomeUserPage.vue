<template>
  <q-page class="page-centered">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-row align="center">
          <q-col cols="auto" class="user-info">
            <span class="user-name">Olá, Fulana!</span>
            <q-icon name="person" class="user-icon" />
          </q-col>
          <q-col cols="auto">
            <button>Criar nova coleção</button>
          </q-col>
        </q-row>
        <div class="home-buttons">
          <div class="button-item">
            <button>Meus Cards</button>
          </div>
          <div class="button-item">
            <button>Estudar</button>
          </div>
          <div class="button-item">
            <button>Revisar</button>
          </div>
          <div class="button-item">
            <button>Convidar amigos</button>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.page-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.q-gutter-md > * {
  margin-bottom: 1rem;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-name {
  margin-right: 0.5rem;
}

.user-icon {
  margin-left: 0.5rem;
}

.home-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-item {
  margin-bottom: 1rem;
}

.q-mt-md {
  margin-top: 1rem;
}
</style>
