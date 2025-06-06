const science = (data)=>{
    console.log(data.fname + " your admission confirm in scinece with per "+data.per);
    
}

const commerce = (data)=>{
    console.log(data.fname + " your admission confirm in commerce with per "+data.per);
}

const arts = (data)=>{
    console.log(data.fname + " your admission confirm in arts with per "+data.per);
}

let percenatge = parseInt(prompt("Enter your percentage"))

if(percenatge > 90)
{
    science({
        fname:"kunj",
        per:percenatge
    })
}
else if(percenatge > 70){
    commerce({fname:"kunj",per:percenatge})
}
else if(percenatge > 50)
{
    arts({fname:"kunj",per:percenatge})
}
else{
    console.log("You are not eligible for admission")
}