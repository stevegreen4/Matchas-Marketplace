<template>
    <div class="search-pane">
        <div class="left-pane">
            <button>All Products</button>
            <button>Interactive</button>
            <button>Stuffed</button>
            <button>Random</button>
        </div>
        <div class="right-pane">
            <input type="text" placeholder="Search By..." v-model="searchTerm" />
        </div>
    </div>
    <item-cards v-bind:items="filterItems"/>
</template>

<script>
import ItemCards from './ItemCards.vue';
export default {
    components: {
        ItemCards
    },
    data() {
        return {
            searchTerm: ''
        }
    },
    computed: {
        filterItems() {
            let allItems = this.$store.state.items;
            return allItems.filter(item => {
                return item.name.toLowerCase().includes(
                    this.searchTerm.toLowerCase()
                );
            });
        }
    }
}
</script>

<style>
.search-pane {
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.left-pane button {
    background-color: white;
    border-radius: 20px;
    margin-right: 15px;
    height: 30px;
    padding: 15px;
    text-align: center;
    line-height: 0;
}

.left-pane {
    margin-left: 10px;
}

.right-pane {
    margin-right: 10px;
}

.right-pane input {
    background-color: white;
    border-radius: 10px;
    height: 30px;
    width: 150px;
}</style>