function science(option){
    return option.fname + " ur admission confirm in scinec with percentage " + option.per;
}

function commerce(option){
    return option.fname + " ur admission confirm in commerce with percentage " + option.per;
}

function arts(option){
    return option.fname + " ur admission confirm in arts with percentage " + option.per;
}

// cb  -- callback function
function admission(name,per,cb){
    let x = cb({
        fname:name,
        per:per
    })
    console.log(x);
    
}

var percentage = 92;
if(percentage > 90)
{
    admission("kunj",percentage,science)
}
else if(percentage > 70){
    admission("kunj",percentage,commerce)
}
else if(percentage > 50){
    admission("kunj",percentage,arts)
}
else{
    console.log("percentage is less than 50")
}