const App = {
    data() {
        return {
            title: 'To-do',
            placeholder: 'Add new item',
            inputValue:'',
            todoList: ['note 1', 'note 2', 'note 42']
        }
    },
    methods: {
        inputChangeHandler(e) {
            this.inputValue = e.target.value
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')