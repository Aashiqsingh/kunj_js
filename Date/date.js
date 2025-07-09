function getDate(){

    // let date = new Date()
    // console.log(date);
    // console.log("year------>",date.getFullYear());
    // console.log("month------>",date.getMonth() + 1);
    // console.log("day------>",date.getDate());
    // console.log("hour------>",date.getHours());
    // console.log("minute------>",date.getMinutes());
    // console.log("second------>",date.getSeconds());
    // console.log("milliseconds------>",date.getMilliseconds());
    // console.log("Time------>",date.getTime());



    let date = new Date();
    date.setFullYear(2022);
    date.setMonth(1);
    date.setDate(1);
    date.setHours(18);
    date.setMinutes(38);
    date.setSeconds(0);
    date.setMilliseconds(0);


    console.log(date);

    
    
    
}


getDate()