const App = {
    data() {
        return {
            title: 'To-do',
            placeholder: 'Add new item',
            inputValue:''
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')