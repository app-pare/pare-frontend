<template>
  <q-page class="full-height">
    <div class="row justify-center">
      <div class="col-10 col-xs-5 col-sm-5 col-md-4">
        <label for="">Minhas Coleções</label>
        <q-btn
          icon="add"
          class="btn full-width"
          label="Criar uma coleção"
          @click="goToCreateCollection"
        />
        <div class="q-pa-md">
          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="amber"
            navigation
            padding
            arrows
            height="300px"
            class="shadow-2 rounded-borders"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-12 full-height"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="https://cdn.quasar.dev/img/cat.jpg"
                />
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="https://cdn.quasar.dev/img/linux-avatar.png"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="https://cdn.quasar.dev/img/material.png"
                />
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="https://cdn.quasar.dev/img/donuts.png"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>

        <label for="">Meus Flashcards</label>
        <q-btn
          @click="goToCreateFlashCard"
          icon="add"
          class="btn full-width"
          label="Criar um flashcard"
        />
        <div>
          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="white"
            navigation
            padding
            arrows
            height="300px"
            class="bg-primary text-white shadow-1 rounded-borders"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <q-icon name="style" size="56px" />
              <div class="q-mt-md text-center">a</div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <q-icon name="live_tv" size="56px" />
              <div class="q-mt-md text-center">b</div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <q-icon name="layers" size="56px" />
              <div class="q-mt-md text-center">c</div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <q-icon name="terrain" size="56px" />
              <div class="q-mt-md text-center">d</div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  methods: {
    goToCreateCollection() {
      this.$router.push("/home/user/create/collection");
    },
    goToCreateFlashCard() {
      this.$router.push("/home/user/create/flashcard");
    },
  },
  setup() {
    return {
      slide: ref("style"),
    };
  },
});
</script>
