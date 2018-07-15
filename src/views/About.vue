<template>
    <section>
        <div class="first-half about__text">
            <h1 class="headline headline__large">I'm Jonas Perez</h1>
            <p class="subhead">An aspiring web developer and designer looking to create things that make a difference.</p>
        </div>

        <div class="about__picture second-half">
            <div class="picture-1"></div>
            <div class="picture-2"></div>
        </div>
        
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="sass">
    .about__picture
        height: 400px
        width: 400px        
        .picture-1, .picture-2
            height: 270px
            width: 270px
            border: 7px solid #FFF
            background:
                position: center
                size: cover
            filter: hue-rotate(-30deg)
        .picture-1
            background:
                image: url('../assets/about1.jpg')
            transform: rotate(15deg)
        .picture-2
            background:
                image: url('../assets/about2.jpg')
            transform: rotate(-5deg) translate(55%, -35%)

    @media only screen and (max-width: 1024px)
        .about__picture    
            top: 26% !important
            .picture-1, .picture-2
                height: 195px
                width: 195px
                margin-left: 75px
    
    @media only screen and (max-width: 768px)
        .about__text
            text-align: center
            top: 60% !important
            left: 50% !important
            transform: translate(-50%, -50%)
    
        .about__picture
            top: 34% !important
            left: 40% !important
            transform: translate(-50%, -50%)
            .picture-1, .picture-2
                height: 225px
                width: 225px
            .picture-1
                transform: rotate(10deg)
            .picture-2
                transform: rotate(-5deg) translate(85%, -70%) !important
    
    @media only screen and (max-width: 720px)
        .about__text
            top: 48% !important   
            .headline__large
                font-size: 2.2rem !important
            .subhead   
                font-size: 1.8rem !important
        .about__picture
            top: 34% !important
            left: 30%
     
    @media only screen and (max-width: 480px)
        .about__text
            text-align: center
            top: 53% !important
            left: 50% !important
            transform: translate(-50%, -50%)
    
        .about__picture
            top: 39% !important
            left: 48% !important
            transform: translate(-50%, -50%)
            .picture-1, .picture-2
                height: 160px
                width: 160px
            .picture-1
                transform: rotate(10deg)
            .picture-2
                transform: rotate(-5deg) translate(85%, -70%) !important
    @media only screen and (max-width: 414px)
        .about__text
            top: 55% !important
            left: 50% !important
    
        .about__picture
            top: 42% !important
            left: 50% !important
            .picture-1, .picture-2
                height: 140px
                width: 140px
    @media only screen and (max-width: 375px)
        .about__text
            top: 58% !important
            left: 50% !important
    
        .about__picture
            height: 300px
            width: 300px
            top: 36% !important
            left: 37% !important
    @media only screen and (max-width: 320px)
        .about__text
            top: 52% !important
            left: 50% !important
            .subhead
                font-size: 1.7rem
    
        .about__picture
            height: 300px
            width: 300px
            top: 38% !important
            left: 40% !important
            .picture-1, .picture-2
                height: 120px
                width: 120px

</style>
