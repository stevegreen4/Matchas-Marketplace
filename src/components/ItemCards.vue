<template>
    <div class="card-container">
        <div class="single-card" v-for="item in items" v-bind:key="item.itemId">
            <img v-bind:src="item.imgUrl" alt="Cat Picture" v-on:click="sendToDetails(item.itemId)">
            <div class="name">
                {{ item.name }}
            </div>
            <div class="price">
                {{ currencyInUSD(item.price) }}
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    props: ['items'],
    methods: {
        currencyInUSD(value) {
            let answer = Intl.NumberFormat(`en-US`, {
                currency: `USD`,
                style: "currency",
            }).format(value);
            return answer;
        },
        sendToDetails(itemId) {
            this.$router.push({name: "singleItem", params: {id: itemId}});
        }
    },
    created() {
        this.$store.commit('GET_ALL_ITEMS');
    }
}
</script>

<style>
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
}

.single-card {
    display: grid;
    grid-template-areas: 
    "pic pic"
    "name price";
    padding: 10px;
    background-color: gray;
    color: white;
    border-radius: 20px;
}

.name {
    grid-area: name;
    background-color: gray;
}

.price {
    grid-area: price;
    background-color: gray;
}

.name, .price {
    display: flex;
    justify-content: space-around;
}

.single-card img {
    grid-area: pic;
    width: 200px;
    height: 300px;
    padding-bottom: 10px;
    background-color: gray;
}
</style>