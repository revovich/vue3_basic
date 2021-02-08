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
    },
    computed: {
        doubleCount() {
            return this.todoList.length * 2
        }
    },
    watch: {
        inputValue(value) {
            console.log(value)
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')