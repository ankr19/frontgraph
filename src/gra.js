// garbage values
let time = [];
        for(let i in data){
            time.push(data[i].Time);
        }
        time = time.map((e)=>{return e.slice(e.length-2,e.length)});
        console.log(time);