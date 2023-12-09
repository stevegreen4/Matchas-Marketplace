<template>
    <div class="item-card">
        <h1 class="individual-name">
            {{ currentItem.name }}
        </h1>
        <img v-bind:src="currentItem.imgUrl" alt="Cat Pic">
        <div class="description">
            {{ currentItem.description }}
        </div>
        <div class="individual-price">
            {{ currencyInUSD(currentItem.price) }}
        </div>
        <div class="cart-button">
            <button>Add to Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        currentItem() {
            return this.$store.state.singleItem;
        }
    },
    methods: {
        currencyInUSD(value) {
            let answer = Intl.NumberFormat(`en-US`, {
                currency: `USD`,
                style: "currency",
            }).format(value);
            return answer;
        },
    },
    created() {
        this.$store.commit('GET_ITEMS_BY_ID', this.$route.params.id);
    }
}
</script>

<style>
    .item-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        color: white;
        background-color: black;
    }

    .individual-name {
        margin: 20px;
        font-size: 100px;
    }

    .item-card img {
        width: 500px;
        margin-bottom: 20px;
    }

    .description {
        font-size: 30px;
        margin-bottom: 20px;
    }

    .individual-price {
        font-size: 25px;
        margin-bottom: 20px;
    }

    .cart-button button {
        background-color: black;
        border: 1px solid white;
        color: white;
        padding: 10px;
        font-size: 20px;
    }

    .cart-button button:hover {
        color: red;
        background-color: white;
    }
</style>