<template>
    <div class="parallax__container">
        <div data-depth="0.075" class="parallax__background"></div>
        <div data-depth="0.2" class="parallax__midground"></div>
        <div data-depth="0.4" class="parallax__foreground"></div>
    </div>
</template>

<script>
import Parallax from 'parallax-js';

export default {
    data() {
        return {
            parallaxed: false,
            parallax: null,
        }
    },
    mounted() {
        if( window.innerWidth > 768 && this.parallaxed == false ) {
            this.parallaxed = true;
            let scene = document.querySelector('.parallax__container');
            this.parallax = new Parallax(scene, {
                relativeInput: true,
                hoverOnly: true
            });
        }

        window.onresize = () => {
            if( window.innerWidth > 768 && this.parallaxed == false ) {
                this.parallaxed = true;
                let scene = document.querySelector('.parallax__container');
                this.parallax = new Parallax(scene, {
                    relativeInput: true,
                    hoverOnly: true
                });
            }else if(window.innerWidth <= 768 && this.parallaxed == true) {
                this.parallaxed = false;
                this.parallax.destroy();
                this.parallax = null;
            }
        }
        
    }
}
</script>

<style lang="sass">
.parallax__container
    height: 100%
    width: 100%
    position: absolute    
    overflow: hidden
    opacity: 0.75 
    top: 0
    left: 0

.parallax__background    
    height: 120%
    width: 120%
    background-image: url('../assets/bg.png')
    background-position: center center
    background-repeat: no-repeat
    background-size: cover
    margin-left: -5%
    margin-top: -5%

.parallax__midground 
    width: 73%
    height: 73%
    margin: 8% 19%
    background-image: url('../assets/mg.png')
    background-position: center center
    background-repeat: no-repeat
    background-size: contain

.parallax__foreground 
    width: 110%
    height: 100%
    background-image: url('../assets/fg.png')
    background-position: center center
    background-repeat: no-repeat
    background-size: 100% 75%
    margin-left: -5%
    margin-top: 8%

@media only screen and (max-width: 768px)
    .parallax__background    
        background:
            image: url('../assets/bg-m.jpg')
            position: 60% 50%
            size: cover
    
    .parallax__foreground, .parallax__midground 
        display: none !important



</style>
