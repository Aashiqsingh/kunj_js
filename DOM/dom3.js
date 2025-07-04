// var a = 1;

var colors = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"];

// console.log(colors[0]);



function changeColor(){
    // console.log("hello" + (a++));
    var randomIndex = Math.floor(Math.random() * colors.length);
    
    console.log(randomIndex);

    let mydiv = document.getElementById("mydiv")
    mydiv.style.backgroundColor = colors[randomIndex]
    
}
