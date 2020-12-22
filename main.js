const app = Vue.createApp ({
    data() { // ES6 Shorthand ==> data: function()
        return {
            product: 'Socks',
            description: 'black'
        }
    }
})


/**
 * const app = Vue.createApp({ OPTIONAL OBJECT })
 * WE HAVE TO PASS AT LEAT A EMPTY OBJECT TO START AN APP
 * doing this we create a vue instance which is the heart of our vue application
 * which powers are whole applications
 * 
 * data(){
 * 
 * }
 * 
 * how that happens 
 * under the hood vue is reactive
 * there is  a reactivity system running under the hood
 * automatically update without us knowing.
 * 
 * 
 * 
 */