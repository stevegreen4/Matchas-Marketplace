<template>
    <div class="carousel">
        <div class="carousel-inner">
            <PictureCarouselItem v-for="(slide, index) in slides" 
            v-bind:slide="slide" 
            v-bind::key="`item-${index}`"
            v-bind:current-slide="currentSlide"
            v-bind:index="index"/>
        </div>
    </div>
</template>

<script>
import PictureCarouselItem from '../components/PictureCarouselItem.vue'
export default {
    components: {
        PictureCarouselItem
    },
    data() {
        return {
        slides: [
        "https://res.cloudinary.com/dyhlnf5ft/image/upload/v1705790977/About%20Photos/flsvpoy28pgpybrpuyli.jpg",
        "https://res.cloudinary.com/dyhlnf5ft/image/upload/v1705790976/About%20Photos/el8r2l9nvzxy386fhmlz.jpg",
        "https://res.cloudinary.com/dyhlnf5ft/image/upload/v1705790976/About%20Photos/zvtxfu4gzhdgmjzq7exn.jpg",
        "https://res.cloudinary.com/dyhlnf5ft/image/upload/v1705787565/About%20Photos/porlneo444pmjczpcodi.jpg",
        "https://res.cloudinary.com/dyhlnf5ft/image/upload/v1705787564/About%20Photos/s6igp7k9r1vreqrwkkla.jpg"
        ],
        currentSlide: 0,
        slideInterval: null
        }
    },
    methods: {
        setCurrentSlide(index) {
            this.currentSlide = index;
        }
    },
    mounted() {
        this.slideInterval = setInterval(() => {
            const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
            this.setCurrentSlide(index);
        }, 3000)
    },
    beforeUnmount() {
        clearInterval(this.slideInterval);
    }
    
}
</script>

<style>
   .carousel {
    display: flex;
    justify-content: center;
    padding: 20px;
   }
   .carousel-inner {
    position: relative;
    width: 400px;
    height: 400px;
    overflow: hidden;
   }
</style>