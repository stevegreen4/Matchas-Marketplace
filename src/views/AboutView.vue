<template>
  <div class="about">
    <h1>This is Matcha!</h1>
    <p>
      <br>
      Matcha enjoys playing with strings, scratching couches, eating salmon, and watching football. She is afraid of strangers, but 
      once she warms up to you, will rub on your legs until she gets attention.
      <br>
      <br>
      Thank you for visiting my showcase of my cat, Matcha. This entire website was created as a side project to display my full
      stack coding skills using Vue.js, Java, Sql, HTML, CSS, and Javascript. If you like what you see please check out my 
      <a href="https://github.com/stevegreen4">GitHub </a> or get in touch using my
      <a href="https://www.linkedin.com/in/stevedgreen/">LinkedIn </a>.
    </p>
  </div>
  <picture-carousel/>
</template>

<script>
import PictureCarousel from '../components/PictureCarousel.vue'
export default {
  components: {
    PictureCarousel
  }
  
}
</script>

<style>
.about {
  color: white;
}
h1 {
  font-size: 45px;
}
p {
  font-size: 20px;
}
</style>
