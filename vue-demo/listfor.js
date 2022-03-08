const ListRendering = {
    data(){
        return{
            todos: [
                {text: 'Clean the house'},
                {text: 'Prepare Breakfast'},
                {text: 'Attend WSERVER class'}
            ]
        }
    }
}
Vue.createApp(ListRendering).mount('#list-rendering')