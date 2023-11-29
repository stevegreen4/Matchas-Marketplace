<template>
    <nav class="header">
        <nav class="left">
            <RouterLink to="/">
                <img src="../assets/images/cat-paw.png" alt="Cat Paw" class="cat-paw">
            </RouterLink>
            <RouterLink to="/about">Who's Matcha?</RouterLink>
            <router-link v-bind:to="{ name: 'categories' }">CATegories</router-link>
            <router-link v-bind:to="{ name: 'contact' }">Contact</router-link>
        </nav>
        <nav class="right">
            <router-link v-bind:to="{ name: 'cart' }">
                <img src="@/assets/images/cart-image.png" alt="cart">
            </router-link>
            <router-link v-bind:to="{name: 'customer'}">
                <img src="@/assets/images/user-bio.png" alt="customer-profile">
            </router-link>
        </nav>
    </nav>
</template>
<script>
export default {

}
</script>

<style>
img {
    width: 50px;
}

.header {
    background-color: black;
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid white;
}
.right {
    display: flex;
    margin-left: auto;
}
.left {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.left a {
    margin-right: 30px;
    text-decoration: none;
    color: white;
}
</style>