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
           ],
           errorMessage : "",
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
                this.errorMessage = "Task rimossa con successo !"
                setTimeout(() => {
                    this.errorMessage = ""
                }, 2000);

            }else{
                this.errorMessage = "Devi prima contrassegnare la task !!"
                setTimeout(() => {
                    this.errorMessage = ""
                }, 2000);
            }
        }
    }

}).mount('#app')