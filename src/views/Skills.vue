<template>
    <section>
        <div class="first-half skills__text text-left">
            <h1 class="headline headline__large">What I do</h1>
            <p class="subhead">I specialize in web development, web design, responsive design, and SEO. My everyday goal is to deliver with the highest quality.</p>
        </div>

        <div class="second-half skills__list copy">
            <div class="skills skill__1">
                <div>
                    <i class="fab fa-html5"></i>
                </div>
                <p>HTML</p>
            </div>
            <div class="skills skill__2">
                <div>
                    <i class="fab fa-css3-alt"></i>
                </div>
                <p>CSS/Bootstrap</p>
            </div>
            <div class="skills skill__3">
                <div>
                    <i class="fab fa-js"></i>
                </div>
                <p>Javascript/JQuery</p>
            </div>
            <div class="skills skill__4">
                <div>
                    <i class="fab fa-vuejs"></i>
                </div>
                <p>Vuejs/Nuxtjs</p>
            </div>
            <div class="skills skill__5">
                <div>
                    <i class="fab fa-php"></i>
                </div>
                <p>PHP/MySQL</p>
            </div>

            <div class="skills skill__6">
                <div>
                    <i class="fas fa-search"></i>
                </div>
                <p>SEO</p>
            </div>
            <div class="skills skill__7">
                <div>
                    <div class="skill__photoshop">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 17.469 17.469" style="enable-background:new 0 0 17.469 17.469;" xml:space="preserve">
                            <g>
                                <g>
                                    <path style="fill:#FFF;" d="M5.925,4.982c-0.442,0-0.742,0.043-0.898,0.087v2.841C5.213,7.952,5.44,7.966,5.754,7.966
                                        c1.157,0,1.871-0.585,1.871-1.571C7.624,5.511,7.01,4.982,5.925,4.982z"/>
                                    <path style="fill:#FFF;" d="M16.4,0.002H1.07C0.479,0.002,0,0.48,0,1.069v15.329c0,0.59,0.479,1.069,1.07,1.069H16.4
                                        c0.59,0,1.069-0.479,1.069-1.069V1.07C17.469,0.48,16.99,0.002,16.4,0.002z M8.894,8.624c-0.741,0.7-1.842,1.014-3.125,1.014
                                        c-0.287,0-0.543-0.014-0.743-0.043v3.442H2.869V3.541C3.54,3.428,4.482,3.342,5.811,3.342c1.341,0,2.299,0.256,2.94,0.771
                                        c0.617,0.486,1.03,1.286,1.03,2.228S9.466,8.08,8.894,8.624z M12.145,13.179c-0.916,0-1.729-0.198-2.258-0.485l0.385-1.556
                                        c0.4,0.241,1.229,0.527,1.873,0.527c0.655,0,0.927-0.228,0.927-0.586c0-0.356-0.214-0.527-1.027-0.799
                                        c-1.442-0.485-2-1.271-1.986-2.099c0-1.298,1.114-2.286,2.842-2.286c0.814,0,1.542,0.187,1.97,0.4l-0.385,1.5
                                        c-0.314-0.172-0.913-0.399-1.514-0.399c-0.527,0-0.826,0.214-0.826,0.571c0,0.328,0.269,0.499,1.126,0.8
                                        c1.328,0.456,1.886,1.128,1.899,2.154C15.171,12.222,14.141,13.179,12.145,13.179z"/>
                                </g>
                            </g>                           
                        </svg>
                    </div>
                    
                </div>
                <p>Adobe Photoshop</p>
            </div>
            <div class="skills skill__8">
                <div class="skill__illustrator">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 16.871 16.871" style="enable-background:new 0 0 16.871 16.871;" xml:space="preserve">
                    <g>
                        <g>
                            <path style="fill:#FFF;" d="M6.847,5.772H6.822c-0.127,0.511-0.254,1.16-0.395,1.657L5.917,9.25h1.898L7.28,7.429
                                C7.128,6.919,6.975,6.283,6.847,5.772z"/>
                            <path style="fill: #FFF;" d="M15.837,0H1.033C0.462,0,0,0.462,0,1.033v14.805c0,0.57,0.462,1.033,1.033,1.033h14.805
                                c0.57,0,1.033-0.463,1.033-1.033V1.033C16.871,0.463,16.408,0,15.837,0z M8.758,12.905l-0.663-2.203H5.638l-0.612,2.203H3.014
                                l2.624-8.583h2.546l2.663,8.583H8.758z M13.793,12.905h-1.937V6.678h1.937V12.905z M12.813,5.914
                                c-0.611,0-1.019-0.434-1.007-0.969c-0.012-0.561,0.396-0.979,1.021-0.979c0.623,0,1.018,0.419,1.03,0.979
                                C13.857,5.48,13.45,5.914,12.813,5.914z"/>
                                    </g>
                                </g>
                    </svg>
                </div>
                <p>Adobe Illustrator</p>
            </div>
        </div>
        
    </section>
</template>

<style lang="sass">
    .skills__list
        display: flex
        flex-flow: row wrap
        width: 600px
    .skills
        position: relative
        display: inline-block
        height: 150px
        width: 150px
        text-align: center
        margin: 0 18px
        p
            max-width: 150px
        i
            font-size: 4rem
    
    .skill__photoshop, .skill__illustrator
        position: relative
        display: inline-block
        height: 64px
        width: 64px
        margin-right: 5px
        // border: 3px solid #FFF

    @media only screen and (max-width: 1920px)
        .skills__list
            right: 12% 
        .skills
            i
                font-size: 6rem
        .skill__photoshop, .skill__illustrator
            height: 92px
            width: 92px
    @media only screen and (max-width: 1600px)
        .skills
            i
                font-size: 4rem 
        .skill__photoshop, .skill__illustrator
            height: 64px
            width: 64px
    @media only screen and (max-width: 1440px)
        .skills__list
            width: 500px
        .skills
            margin: 0
    @media only screen and (max-width: 1024px)
        .skills__list
            display: flex
            flex-flow: row wrap
            width: 360px
        .skills
            width: 95px
            height: 95px
            i
                font-size: 3rem 
        .skill__photoshop, .skill__illustrator
            height: 48px
            width: 48px
    
    @media only screen and (max-width: 768px)
        .skills__text
            top: 30% !important
            left: 50% !important
            transform: translate(-50%, -50%)
        
        .skills__list
            width: 60%
            top: 63% !important
            left: 50% !important
            transform: translate(-50%, -50%)
            display: flex
            justify-content: space-around
            flex-flow: row wrap
    @media only screen and (max-width: 720px)
        .skills__text
            top: 30% !important  
        .skills__list
            top: 50% !important
            margin-top: 25px
    @media only screen and (max-width: 480px)
        .skills__text
            top: 33% !important  
        .skills__list
            top: 65% !important
            width: 80%
    @media only screen and (max-width: 414px)
        .skills__text
            top: 33% !important  
        .skills__list
            top: 68% !important
            width: 90%
        .skills
            width: 82px
            height: 82px
            i
                font-size: 2.5rem 
        .skill__photoshop, .skill__illustrator
            height: 38px
            width: 38px
    @media only screen and (max-width: 360px)
        .skills__text .subhead
            font-size: 1.7rem
        .skills__list
            top: 62% !important
            width: 82%
        .skills
            width: 62px
            height: 62px
            i
                font-size: 2rem 
        .skill__photoshop, .skill__illustrator
            height: 32px
            width: 32px
    @media only screen and (max-width: 320px)
        .skills__text .subhead
            font-size: 1.7rem
        .skills__list
            top: 68% !important
            width: 82%
        .skills
            width: 62px
            height: 62px
            i
                font-size: 2rem 
        .skill__photoshop, .skill__illustrator
            height: 32px
            width: 32px
        
</style>

