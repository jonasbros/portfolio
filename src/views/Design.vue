<template>
    <section>
        <div class="first-half design__text">
            <h1 class="headline headline__large">Design work</h1>
            <p class="subhead">I also do logo design work, so if you want a new logo, we can talk about that too.</p>
            <small><a href="https://www.instagram.com/jonasbros00/" target="_blank">Check out my instagram for more.</a></small> 
        </div>

        <div class="second-half carousel__container is-empty">
                <div class="slider-for">                
                    <div class="slider-item slider__item" v-for="(work, index) in works" :key="index">
                        <img :src="work.images.standard_resolution.url" alt="">
                    </div>            
                </div>

                <div class="slider-nav">               
                    <div class="slider-item slider__nav-item" v-for="(work, index) in works" :key="index">
                        <img :src="work.images.low_resolution.url" alt="">
                    </div>                  
                </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {  
    data() {
        return {
            isVisited: false,
        }        
    },
    computed: {
        works() {
            return this.$store.getters.getWorks;
        }
    },
    watch: {
        works(nu) {
            setTimeout(() => {
                this.initSlick();
            }, 150); 
        }
    },
    mounted() {       
        if( Object.keys(this.works).length > 0 ) {
            this.initSlick();
        }                
    },
    methods: {        
        initSlick() {     
            $('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.slider-nav'
            });
            $('.slider-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                // dots: true,
                centerMode: true,
                focusOnSelect: true
            });

            document.querySelector('.carousel__container').classList.remove('is-empty');

            this.isVisited = true;
        }
    }
}
</script>

<style lang="sass">
    .carousel__container
        width: 580px
        height: 450px
        transition: opacity 300ms
        &.is-empty
            opacity: 0
    @media only screen and (max-width: 1440px)
        .carousel__container
            width: 500px
            height: 400px
    @media only screen and (max-width: 1024px)
        .carousel__container
            width: 350px
            height: 300px
    @media only screen and (max-width: 768px)
        .design__text
            text-align: center
            left: 50% !important
            top: 25% !important
            transform: translate(-50%, -50%)
        .carousel__container
            width: 80% !important
            height: 320px
            left: 50% !important
            top: 65% !important
            transform: translate(-50%, -50%)

    @media only screen and (max-width: 720px)
        .design__text
            top: 30% !important
            margin-top: -45px
        .carousel__container
            top: 57% !important
            margin-top: -25px

    @media only screen and (max-width: 480px)
        .design__text
            width: 80% !important
            left: 50% !important
            top: 30% !important
        .carousel__container
            width: 80% !important
            height: 260px
            left: 50% !important
            top: 63% !important
    @media only screen and (max-width: 414px)
        .design__text
            width: 90% !important
            left: 50% !important
            top: 30% !important
        .carousel__container
            width: 70% !important
            height: 220px
            left: 50% !important
            top: 63% !important
    
    @media only screen and (max-width: 375px)
        .carousel__container
            width: 80% !important
            height: 220px
            left: 50% !important
            top: 65% !important
    @media only screen and (max-width: 360px)
        .design__text
            .subhead
                font-size: 1.7rem
        .carousel__container
            width: 80% !important
            height: 190px
            left: 50% !important
            top: 63% !important
    @media only screen and (max-width: 320px)
        .carousel__container
            top: 66% !important

    .slider-for
        // height: 80%
    
    .slider-nav
        height: 20%

    .slider-item
        background-color: white
        text-align: center
        color: black
        overflow: hidden
        img
            max-width: 100%
            max-height: 100%
            object-fit: contain
            margin: 0 auto
         
    
    .slider__item
        height: calc(450 * 0.8px)
    
    .slider__nav-item
        position: relative
        height: calc(450 * 0.2px)
        &:not(.slick-current)::before
            content: ""
            background-color: rgba(0, 0, 0, 0.2)
            display: block
            position: absolute
            top: 0
            right: 0
            left: 0
            bottom: 0
    
    @media only screen and (max-width: 1440px)
        .slider__item
            height: calc(400 * 0.8px)
        
        .slider__nav-item
            height: calc(400 * 0.2px)
    @media only screen and (max-width: 1024px)
        .slider__item
            height: calc(300 * 0.8px)
        
        .slider__nav-item
            height: calc(300 * 0.2px)
    @media only screen and (max-width: 768px)
        .slider__item
            height: calc(320 * 0.8px)
        
        .slider__nav-item
            height: calc(320 * 0.2px)

    @media only screen and (max-width: 480px)
        .slider__item
            height: calc(260 * 0.8px)
        
        .slider__nav-item
            height: calc(260 * 0.2px)
    @media only screen and (max-width: 414px)
        .slider__item
            height: calc(220 * 0.8px)
        
        .slider__nav-item
            height: calc(220 * 0.2px)
    @media only screen and (max-width: 320px)
        .slider__item
            height: calc(190 * 0.8px)
        
        .slider__nav-item
            height: calc(190 * 0.2px)


    .slick-dots li button::before
        color: #FFF
    .slick-dots li.slick-active button:before
        color: #FFF
    
</style>
