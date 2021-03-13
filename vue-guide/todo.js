const TodoList = {
    data(){
        return {
            groceryList: [
                { id: 0, text: 'Vegetables'},
                { id: 1, text: 'Cheese'},
                { id: 2, text: 'Whatever else'}
            ]
        }
    }
}

const app = Vue.createApp(TodoList)



app.component('todo-item',{
    props: ['todo'],
    template: `<li>{{ todo.text}}</li>
    `
})

app.mount('#todo-list-app')


