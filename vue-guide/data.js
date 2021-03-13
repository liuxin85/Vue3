const app = Vue.createApp({
    data() {
        return { count: 4}
    },
    methods: {
      increment(){
        // `this ` will refer to the component instance
        this.count++
      }
    }
})

const vm = app.mount('#app')

console.log(vm.$data.count)  // =>4
console.log(vm.count)   // =>4


console.log(vm.count)  // => 4
vm.increment()
console.log(vm.count)  // =>5


// These instance properties are only added when the
// instance is first created, so you need to ensure they
// are all present in the object returned by the data function.

// These instance properties ar only added when the instance is frist
// created.
