function science(option){
    return option.fname + " your admission confimr in scinece with per " + option.per;
}

function commerce(option){
    return option.fname + " your admission confimr in commerce with per " + option.per;
}

function arts(option){
    return option.fname + " your admission confimr in arts with per " + option.per;
}


let percentage = parseInt(prompt("Enter your percentage"));
let name = "priya";
var temp;

if(percentage > 90)
{
    temp = science({
        fname:"pallavi",
        per:percentage
    })
}
else if(percentage > 70){
    temp = commerce({fname:name,per:percentage})
}
else if(percentage > 50){
    temp = arts({fname:name,per:percentage})
}
else{
    console.log("percentage is less than 50");
}
console.log(temp);
