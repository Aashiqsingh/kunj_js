const science = (data)=>{
    return data.fname + " your admission confirm in scinece with per "+data.per
    
}

const commerce = (data)=>{
    return data.fname + " your admission confirm in commerce with per "+data.per
}

const arts = (data)=>{
    return data.fname + " your admission confirm in arts with per "+data.per
}

let percenatge = parseInt(prompt("Enter your percentage"))
var ans;

if(percenatge > 90)
{
    ans = science({
        fname:"kunj",
        per:percenatge
    })
}
else if(percenatge > 70){
    ans = commerce({fname:"kunj",per:percenatge})
}
else if(percenatge > 50)
{
    ans = arts({fname:"kunj",per:percenatge})
}
else{
    
    console.log("You are not eligible for admission")
}
console.log(ans);
