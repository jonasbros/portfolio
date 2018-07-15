<template>
    <section>
        <div class="full-width text-center contact">
            <h1 class="headline headline__large">Let's get in touch</h1>
            <div class="link-container text-left">
                <p class="subhead"><i class="fas fa-envelope-square"></i> 00jonasperez@gmail.com</p> 
                <p class="subhead"><i class="fab fa-twitter-square"></i>&nbsp;<a href="https://twitter.com/__jonasbros" target="_blank">Twitter</a></p> 
                <p class="subhead"><i class="fab fa-instagram"></i>&nbsp;<a href="https://www.instagram.com/jonasbros00/" target="_blank">Instagram</a></p>
            </div>                     
        </div>

    </section>
</template>

<style lang="sass">
    .link-container
        margin: 25px auto
        width: 50%

    @media only screen and (max-width: 1280px)
        .link-container
            width: 60%
            padding-left: 25px
    @media only screen and (max-width: 1024px)
        .link-container
            width: 70%
            padding-left: 35px
    
    @media only screen and (max-width: 768px)
        .link-container
            text-align: left
            width: 100%
            padding-left: 0px
    @media only screen and (max-width: 480px)
        .contact
            width: 80% !important
            padding-left: 0
    @media only screen and (max-width: 414px)
        .contact
            width: 90% !important
            padding-left: 0
    @media only screen and (max-width: 375px)
        .contact
            .subhead
                font-size: 1.7rem
        
        .link-container
            width: 90%
            margin: 10px auto

</style>

