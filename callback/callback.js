// javascript ---> single threaded application

// java  --> multi threaded application

// callback 

function demo(){
    console.log("demo function");
    
}



function test(x){
    // console.log(x);
    x()
    
}

// test(10)
// test(12.44)
// test("ram")
// test(true)

test(demo)