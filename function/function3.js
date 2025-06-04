function lasvegas(data){
    return data.name + " ur tour is confirmed in las vegas with package " + data.amount;
}

function newyork(data){
    return data.name + " ur tour is confirmed in new york with package " + data.amount;
}

function london(data){
    return data.name + " ur tour is confirmed in london with package " + data.amount;
}


let budget = 3200;
let ans;

if(budget > 3500)
{
    ans = lasvegas({name:"kunj",amount:budget,size:"1000kb"})
}
else if(budget > 2500){
    ans = newyork({name:"kunj",amount:budget,size:"1000kb"})
}
else if(budget > 1500){
    ans = london({name:"kunj",amount:budget,size:"1000kb"})
}
else{
    console.log("budget is less than 1500");
}
console.log(ans);
