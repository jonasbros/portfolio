<template>
    <section>
        <div class="first-half showcase__head">
            <h1 class="headline headline__small">Here are some of the websites I've made.</h1>
        </div>

        <div class="second-half showcase">
            <div class="showcase__item">
                <div class="showcase__text copy">
                    <h3>Bolg</h3>
                    <p>Website similar to Medium.com where users can create blog posts and share their stories. Personal project.</p>
                    <a href="https://jonasbros.github.io/bolg" target="_blank">Visit site <i class="fas fa-external-link-alt"></i></a>
                </div>                
            </div>
            <div></div>
            <div></div>
        </div>
    </section>
</template>

<style lang="sass">
    .showcase
        display: flex
        flex-flow: row wrap
        width: 550px
        height: 450px
        // background-color: pink
    @media only screen and (max-width: 1920px)
        .showcase
            width: 650px
            height: 550px
    @media only screen and (max-width: 1600px)
        .showcase
            width: 550px
            height: 450px
    @media only screen and (max-width: 1600px)
        .showcase
            width: 500px
            height: 400px
    @media only screen and (max-width: 1280px)
        .showcase
            width: 460px
            height: 360px
    @media only screen and (max-width: 768px)
        .showcase
            width: 80% !important
            height: 500px
            top: 65% !important
            left: 50% !important
            transform: translate(-50%, -50%)
        .showcase__head
            width: 80% !important
            top: 20% !important
            left: 50% !important
            transform: translate(-50%, -50%)

    @media only screen and (max-width: 720px)
        .showcase
            top: 53% !important
            margin-top: 25px
        .showcase__head
            top: 25% !important

    @media only screen and (max-width: 480px)
        .showcase
            top: 60% !important
            width: 460px
            height: 360px
        .showcase__head
            top: 25% !important
            width: 100% !important
    @media only screen and (max-width: 414px)
        .showcase
            top: 60% !important
            width: 400px
            height: 330px
        .showcase__head
            top: 25% !important
            width: 100% !important        
        .showcase__text
            width: 90% !important
            h3
                font-size: 1.8rem !important
    @media only screen and (max-width: 360px)
        .showcase
            top: 57% !important
            width: 290px !important
            height: 280px !important
        .showcase__head
            top: 25% !important
            width: 100% !important        
            .headline__small
                font-size: 2rem !important
        .showcase__text
            width: 90% !important
            h3
                font-size: 1.8rem !important

    @media only screen and (max-width: 320px)
        .showcase
            top: 60% !important
            width: 290px !important
            height: 280px !important
        .showcase__head
            top: 25% !important
            width: 100% !important        
            .headline__small
                font-size: 2rem !important
        .showcase__text
            width: 90% !important
            h3
                font-size: 1.8rem !important

    .showcase__item
        position: relative
        width: 100%
        height: 70%
        background:
            color: black
            image: url('../assets/bolg/1.jpg')
            size: cover
            position: center
        .showcase__text
            position: absolute
            width: 70%
            z-index: 99
            top: 50%
            left: 50%
            text-align: center
            transform: translate(-50%, -50%)
            h3, p, a
                margin-bottom: 10px
                font-family: 'Roboto', Helvetica, sans-serif
            h3
                font-size: 2.5rem                    
        &::after
            display: block
            content: ""
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            background-color: rgba(0, 0, 0, 0.45)
        


</style>
