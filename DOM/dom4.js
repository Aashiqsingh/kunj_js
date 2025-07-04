function changeTxt(){
    let text = document.getElementById("text")
    // console.log(text.value);
    let nameErr = document.getElementById("nameErr")

    if(text.value.length  < 4){
        // alert("Enter at least 4 characters");
        // console.log("Enter at least 4 characters");
        nameErr.innerHTML = "Enter at least 4 characters";
        nameErr.style.color = "red";
        text.style.outline = "2px solid red"
    }
    else{
        nameErr.innerHTML = "";
        nameErr.style.color = "black";
        text.style.outline = "2px solid green"
    }

    
}