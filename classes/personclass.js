

export default class  Player
{
    constructor(name)
    {
        this.name = name
        this.times = []
    }
    recordTime(ask) {
        const start = Date.now() 
        ask = ask()
        const end = Date.now()
        let time = end - start 
        this.times.push(time)

    }
    showStat()
    {
        let total = 0 
        this.times.forEach(element => {
            total += element
        });
        let average = 0
        if(this.times.length > 0)
        {
            average = total/this.times.length
        }
        console.log(` you average time for riddle is: ${average/1000} seconds`)
        console.log(` you time for all riddles is: ${total/1000} seconds`)
    }
}

