const App = {
    data() {
        return {
            title: 'To-do',
            placeholder: 'Add new item',
            inputValue:''
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