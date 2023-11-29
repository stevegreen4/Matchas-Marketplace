<template>
  <main>
    <top-matcha-block/>
    <search-pane/>
    <!-- <item-cards/> -->
  </main>
</template>

<script>
import TopMatchaBlock from '../components/TopMatchaBlock.vue';
import SearchPane from '../components/SearchPane.vue';
// import ItemCards from '../components/ItemCards.vue';

export default {
  components: {
    TopMatchaBlock,
    SearchPane,
    // ItemCards
  },
  data() {
    return {

    }
  }

}

</script>

<style></style>