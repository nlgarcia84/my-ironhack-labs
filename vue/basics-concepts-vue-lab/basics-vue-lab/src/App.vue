<script setup>
import HelloWorld from './components/HelloWorld.vue'
import navbar from './components/navbar.vue'
import iteracion2 from './components/iteracion2.vue'
import iteracion3 from './components/iteracion3.vue'
import iteracion4 from './components/iteracion4.vue'
import iteracion5 from './components/iteracion5.vue'
import footer2 from './components/footer2.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="Lab 2: VUE Basics" />
    </div>
  </header>

  <main>
    <navbar />
    <iteracion2 />
    <iteracion3 />
    <iteracion4 />
    <iteracion5 />
    <footer2 />
  </main>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */

</style>
