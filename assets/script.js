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
           newMessageTask : "",
        }
    },
    methods: {
        log(){
            console.log("mi hai cliccato")
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
        },
        createNewObj(){
            const obj = {
                message : this.newMessageTask,
                flag : false
            }
            this.taskList.unshift(obj)

        }
    }

}).mount('#app')