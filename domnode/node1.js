const addElement = () => {

    let mydiv = document.getElementById("mydiv");

    let h1 = document.createElement("h1")
    h1.innerHTML = "Royal technosoft p ltd."


    let link = document.createElement("a")
    link.innerHTML = "google"
    link.href = "https://www.google.com"
    link.target = "_blank"


    mydiv.appendChild(h1);
    mydiv.appendChild(link);

}