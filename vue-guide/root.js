const app = Vue.createApp({
    data(){
        return { count: 1}
    },
    created(){
        // `this` point to the vm instance
        console.log('count is: ' + this.count)
    }
})

const vm = app.mount('#app')

