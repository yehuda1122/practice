import readline from "readline-sync";


export default class riddle{
    constructor({id,name,taskDescription,correctAnswer})
    {
        this.id = id 
        this.name = name
        this.taskDescription = taskDescription
        this.correctAnswer = correctAnswer
    }
    ask(){
        console.log(this.id)
        console.log(this.name)
        console.log(this.taskDescription)
        while (true)
        {
            let answer = readline.question("input answer");
            if(answer === this.correctAnswer){
                console.log("correct")
                break
            }
            else{
                console.log("worng answer try again")
            }
        } 
        }
        
    }