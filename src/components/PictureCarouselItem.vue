<template>
    <transition name="slide-in">
        <div class="carousel-item" v-show="currentSlide === index">
            <img v-bind:src="slide" class="images">
        </div>
    </transition>
</template>

<script>
export default {
    props: ['slide', 'currentSlide', 'index']
}
</script>

<style>
.carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.images {
    width: 400px;
}
.slide-in-enter-active,
.slide-in-leave-active {
    transition: all 1s ease-in-out;
}
.slide-in-enter-from {
    transform: translateX(-100%);
}
.slide-in-leave-to {
    transform: translateX(100%);
}
</style>