<template>
  <div id="app">
    <parallax />
    <transition name="anim__page-change" :enter-active-class="pageChangeEnterAnim" :leave-active-class="pageChangeLeaveAnim">
      <router-view/>
    </transition>
    
    <navigation />
  </div>
</template>
<script>
import navigation from '@/components/Navigation';
import parallax from '@/components/Parallax';
import Swipe from '@/assets/js/Swipe.js';

export default {
  components: {
    navigation,
    parallax,
  },
  metaInfo: {
    title: 'Jonas Perez - Web Developer',
    meta: [
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Jonas Perez' },
      { hid: 'description', name: 'description', content: '\'An aspiring web developer and designer looking to create things that make a difference.' },
      { hid: 'keywords', name: 'keywords', content: 'web developer, web, Web Developer, WEB DEVELOPER, WEB, Web, photoshop, illustrator, seo, logo design, logo, programmer, php, javascript, js, developer, mysql, wordpress, vuejs, vue, vue js, DEVELOPER, Developer, Programmer, PROGRAMMER, web design, design, jquery' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Bolg — Where speech is truly free.' },
      { hid: 'twitter:description', name: 'twitter:description', content: '\'An aspiring web developer and designer looking to create things that make a difference.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '' },
      { hid: 'og:url', name: 'og:url', content: 'https://jonasbros.github.io/'},
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'Jonas Perez - Web Developer' },
      { hid: 'og:image', name: 'og:image', content: './assets/about1.jpg' },
    ]
  },
  data() {
    return {
      page: 1,
      scrollDirection: 'up',
    }
  }, 
  computed: {
    //FADE IN DIRECTION BASED ON SCROLL DIRECTION (UP, DOWN)
    pageChangeEnterAnim() {
      if( this.scrollDirection == 'up' ) {
        return 'animated fadeInLeft';
      }else {
        return 'animated fadeInRight';
      }
    },
    pageChangeLeaveAnim() {
      if( this.scrollDirection == 'down' ) {
        return 'animated fadeOutLeft';
      }else {
        return 'animated fadeOutRight';
      }
    } 
  },
  created() {
    this.$store.dispatch('getWorks');
  },
  mounted() {
    //navtigation click event handler
    this.$root.$on('pageNumber', (num) => {
      this.navClickScrollDirection(num);
    });

    let app = document.querySelector('#app');
    app.addEventListener('wheel', (e) => {
      this.scroller(app, null, e);
    });

    //FOR SWIPING ON MOBILE
    const swipe = new Swipe(app, (event, direction) => {
      // event.preventDefault();
      
      switch (direction) {
        case "up":
          // Handle Swipe Up
          this.scroller(app, 100);
          this.scrollDirection = 'up';
          break;
        case "down":
          // Handle Swipe Down
          this.scroller(app, -100);
          this.scrollDirection = 'down';
          break;
        case "left":
          // Handle Swipe Left
          // this.scroller(app, 100);/
          break;
        case "right":
          // Handle Swipe Right
          // this.scroller(app, -100);/
          break;
      }
    });
  },
  methods: {
    navClickScrollDirection(num) {
      if( this.page < num ) {
        this.scrollDirection = 'down';
      }else {
        this.scrollDirection = 'up';
      }
      this.page = num;
    },
    scroller(app,  d = null, e = null) {
      //add scroll active class, execute scroll paginate
      if( app.classList.contains('scroll__active') == false ) {
        app.classList.add('scroll__active');
        this.$router.push({ path: this.pageName(e, d) });

        //remove active class
        setTimeout(() => {
          app.classList.remove('scroll__active');
        }, 400);
      } 
    },
    pageName(e = null, direction = null) {
      if( !direction ) {
        direction = e.deltaY;
      }      
      
      if( direction > 0 ) {
        this.page++;
        this.scrollDirection = 'down';
      }else {
        this.page--;
        this.scrollDirection = 'up';
      }

      if( this.page < 1 ) {
        this.page = 1;
        return;
      }

      if( this.page > 5 ) {
        this.page = 5;
        return;
      }
      
      switch(true) {
        case this.page == 1:
          return '/';
        break;

        case this.page == 2:
          return '/skills';
        break;

        case this.page == 3:
          return '/webdev';
        break;
        
        case this.page == 4:
          return '/design';
        break;
        
        case this.page == 5:
          return '/contact';
        break;
        
        default:
          return '/'
        break;
      }
    }
  }
}
</script>


<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Kaushan+Script|Oswald:400,700')
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css')

*
  padding: 0
  margin: 0
  box-sizing: border-box
  list-style: none
  color: #FFF
  &::selection
    background-color: #c0a9d6

body
  overflow: hidden
  
#app
  position: relative
  height: 100vh
  width: 100vw
  background-color: black

p, small, a
  font-family: Arial, Helvetica, sans-serif

section
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    .copy 
      font-size: 1rem
    .subhead
      font:
          size: 2.5rem
          family: 'Oswald' !important
      a, small
        text-decoration: none
        font-family: 'Oswald' !important
      
    @media only screen and (max-width: 1920px)
      small 
       font-size: 1.3rem
      .subhead
        font-size: 3rem
      .copy
        font-size: 1.6rem
    @media only screen and (max-width: 1600px)
      small 
        font-size: 1rem
      .copy 
        font-size: 1rem
      .subhead
        font:
            size: 2.5rem
    @media only screen and (max-width: 1366px)
      small 
        font-size: 1rem
      .copy 
        font-size: 1rem
      .subhead
        font:
            size: 2.4rem
    @media only screen and (max-width: 1024px)
      small 
        font-size: 1rem
      .copy 
        font-size: 1rem
      .subhead
        font:
            size: 2.1rem
    @media only screen and (max-width: 768px)
      small 
        font-size: 1.2rem
      .copy 
        font-size: 1.2rem
      .subhead
        font:
            size: 2.4rem
    @media only screen and (max-width: 480px)
      small 
        font-size: 1rem
      .copy 
        font-size: 1rem
      .subhead
        font:
            size: 2.2rem
        
    @media only screen and (max-width: 414px)
      .subhead
        font:
            size: 2rem
          
    .headline       
      color: white
      font:
          family: 'Kaushan Script'    
    @media only screen and (max-width: 1920px)
      .headline       
        &.headline__large
          font-size: 6rem
        &.headline__small
          font-size: 3.5rem
    @media only screen and (max-width: 1600px)
      .headline
        &.headline__large
          font-size: 5rem
        &.headline__small
          font-size: 3rem
    @media only screen and (max-width: 1366px)
      .headline
        &.headline__large
          font-size: 4rem
        &.headline__small
          font-size: 2.8rem
    @media only screen and (max-width: 1024px)
      .headline
        &.headline__large
          font-size: 3.5rem
        &.headline__small
          font-size: 2.5rem
    @media only screen and (max-width: 768px)
      .headline
        &.headline__large
          font-size: 4rem
        &.headline__small
          max-width: 100%
          font-size: 4rem
          text-align: center
    @media only screen and (max-width: 480px)
      .headline
        &.headline__large
          font-size: 3rem
        &.headline__small
          max-width: 100%
          font-size: 3rem
          text-align: center
    @media only screen and (max-width: 414px)
      .headline
        &.headline__large
          font-size: 2.4rem
        &.headline__small
          max-width: 100%
          font-size: 2.4rem
          text-align: center

    .first-half,    
    .second-half
      position: absolute

    @media only screen and (max-width: 1920px)
      .first-half, .second-half
        top: 24%

      .first-half
        left: 15%
        width: 625px
      
      .second-half
        right: 15%
        // width: 625px
    @media only screen and (max-width: 1600px)
      .first-half
        width: 550px
        top: 24%
        left: 12%
      
      .second-half
        top: 24%
        right: 12%

    @media only screen and (max-width: 1366px)
      .first-half
        left: 9%
      
      .second-half
        right: 9%
    @media only screen and (max-width: 1024px)
      .first-half
        width: 460px
        left: 9%
      
      .second-half
        right: 9%

    @media only screen and (max-width: 414px)
      .first-half
        width: 93%
        left: 9%
      
      .second-half
        right: 9%
  

    .full-width
      position: relative
      width: 60%
      height: 60%
      margin: 20vh auto   

.text-center
  text-align: center
.text-left
  text-align: left
@media only screen and (max-width: 768px)
  .text-left
    text-align: center

.text-right
  text-align: right

</style>
