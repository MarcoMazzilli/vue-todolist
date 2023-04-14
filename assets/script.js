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
        },
        deleteTask(task,index){
            if (task.flag) {
                this.taskList.splice(index,1);
            }else{
                console.warn("Devi prima contrassegnare la task !!");
            }
        }
    }

}).mount('#app')