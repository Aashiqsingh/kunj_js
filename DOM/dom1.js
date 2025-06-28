// document.getElementById("txt").innerHTML = "Replaced text by kunj patel";
// document.getElementById("txt").style.backgroundColor = "red";


function changeTxt(){
    // document.getElementById("txt").innerHTML = "Royal technosoft p ltd."


    let txt = document.getElementById("txt")
    txt.innerHTML = "Royal technosoft p ltd."
    txt.style.backgroundColor = "red"
    txt.style.color = "white";
    txt.style.padding = "20px"
}

function changeHref(){
    let link = document.getElementById("link")
    link.href = "https://www.netflix.com";
    link.innerHTML = "Netflix";
    link.target = "_blank"
}