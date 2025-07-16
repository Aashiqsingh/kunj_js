let images = ["img1.png", "img2.webp", "img3.jpg", "img4.jpg", "img5.jpg"];

var currentIndex = 0;
let img = document.getElementById("img");

let prev = document.getElementById("prev");
prev.addEventListener("click",()=>{

                        // (0 - 1 + 5 ) % 5
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    img.src = "../Image/" + images[currentIndex]
})

let next = document.getElementById("next");
next.addEventListener("click",()=>{

                        // 2 + 1 % 5
    currentIndex = (currentIndex + 1) % images.length;
    img.src = "../Image/" + images[currentIndex]
})