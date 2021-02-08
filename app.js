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
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.todoList.push(this.inputValue),
                this.inputValue = ''  
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx) {
            this.todoList.splice(idx, 1)
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')