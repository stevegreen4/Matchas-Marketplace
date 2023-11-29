<template>
    <div class="card-container">
        <div class="single-card" v-for="item in items" v-bind:key="item.itemId">
            <!-- All images are stored on cloudinary -->
            <img v-bind:src="item.imgUrl" alt="Cat Picture" v-on:click="sendToDetails(item.itemId)">
            <div class="name">
                {{ item.name }}
            </div>
            <div class="price">
                {{ currencyInUSD(item.price) }}
            </div>
            <div class="cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                    <path
                        d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0" />
                </svg>
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
            this.$router.push({ name: "singleItem", params: { id: itemId } });
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
        "pic pic pic"
        "name price cart";
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

.cart {
    grid-area: cart;
    background-color: gray;
}

.cart:hover {
    color: red;
    cursor: pointer;
}

.name, .price, .cart {
    display: flex;
    justify-content: space-around;
}

.single-card img {
    grid-area: pic;
    width: 200px;
    height: 300px;
    padding-bottom: 10px;
    background-color: gray;
    cursor: pointer;
}</style>