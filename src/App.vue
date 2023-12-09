<template>
  <header>
      <site-header/>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <site-footer/>
  </footer>
  
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue';
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* background-color: black; */
}

</style>
