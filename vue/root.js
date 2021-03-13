const RootComponent = {

}
const app = Vue.createApp(RootComponent)


// Unlike most of the application methods, mount does not
// return the application. Instead it returns the root
// component instance
const vm = app.mount('#app')

// vm (short for viewModel) to refer to a component