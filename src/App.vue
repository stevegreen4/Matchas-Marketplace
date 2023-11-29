<template>
  <header>
      <site-header/>
  </header>
  <nav>
    <RouterView />
  </nav>
  
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* background-color: black; */
}

</style>
