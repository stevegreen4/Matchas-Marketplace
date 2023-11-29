<template>
    <div>
        {{ currentItem.name }}
    </div>
</template>

<script>
export default {
    computed: {
        currentItem() {
            return this.$store.state.singleItem;
        }
    },
    created() {
        this.$store.commit('GET_ITEMS_BY_ID', this.$route.params.id);
    }
}
</script>

<style>
    
</style>