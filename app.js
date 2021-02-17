Vue.createApp({
    data: () => ({
        title: 'I am the Title)',
        myHtml: '<h1>My HTML title</h1>',
        person: {
            firstName: 'Daniel',
            secondName: 'Haboosh',
            age: 38
        },
        array:[1,2,3,5,8,13]
    }),
    methods: {
        addItem (){
            this.array.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        }
    },
    computed: {
        evenItems() {
            return this.array.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')