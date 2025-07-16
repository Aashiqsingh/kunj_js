let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    alert("clicked");
})
btn.addEventListener("mouseenter",()=>{
    btn.style.height = "100px";
    btn.style.width = "100px";
})
btn.addEventListener("mouseleave",()=>{
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.fontSize = "20px";
})