<template>
  <div id="app">
    <parallax />
    <router-view/>
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
  data() {
    return {
      page: 1,
    }
  }, 
  created() {
    this.$store.dispatch('getWorks');
  },
  mounted() {
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
          break;
        case "down":
          // Handle Swipe Down
          this.scroller(app, -100);
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
      }else {
        this.page--;
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
      a
        text-decoration: none
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
