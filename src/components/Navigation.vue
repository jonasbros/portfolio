<template>
    <nav>
        <ul>
            <router-link to="/" tag="li" @click.native="$root.$emit('pageNumber', 1)"><a></a></router-link>
            <router-link to="/skills" tag="li" @click.native="$root.$emit('pageNumber', 2)"><a></a></router-link>
            <router-link to="/webdev" tag="li" @click.native="$root.$emit('pageNumber', 3)"><a></a></router-link>
            <router-link to="/design" tag="li" @click.native="$root.$emit('pageNumber', 4)"><a></a></router-link>
            <router-link to="/contact" tag="li" @click.native="$root.$emit('pageNumber', 5)"><a></a></router-link>
        </ul>
    </nav>
</template>

<script>
export default {
}
</script>

<style lang="sass">
    nav
        position: absolute
        width: 100%
        height: 30px
        bottom: 55px
        ul
            height: 100%
            width: 324px
            margin: 0 auto
            display: flex
            justify-content: space-around
            flex-flow: row nowrap
            li
                background-color: white
                width: 50px
                height: 5px
                opacity: 0.5
                transition: opacity 0.3s
                &:hover
                    opacity: 1
                    
                a   
                    display: block
                    width: 100%
                    height: 100%
        
    .router-link-exact-active.router-link-active
        opacity: 1

    @media only screen and (max-width: 1920px)
        nav 
            bottom: 75px
            ul
                width: 385px 
                li
                    width: 60px
                    height: 8px
    @media only screen and (max-width: 1600px)
        nav 
            bottom: 55px
            ul
                width: 324px 
                li
                    width: 50px
                    height: 5px
    @media only screen and (max-width: 320px)
        nav 
            bottom: 45px
            ul
                width: 300px 
                li
                    width: 45px
                    height: 5px
</style>
