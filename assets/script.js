const {createApp} = Vue;

createApp({
    data(){
        return{
           taskList : [
            {
                message: 'Lista della spesa',
                flag : false,
            },
            {
                message: 'Finire il progetto',
                flag : false,
            },
            {
                message: 'Pushare il commit',
                flag : false,
            },
           ]
        }
    },
    methods: {
        log(task,index){
            console.log("mi hai cliccato", index)
            console.log(task.flag)
        }
    }

}).mount('#app')