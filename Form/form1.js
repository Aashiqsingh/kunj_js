function submitHandler(event){
    event.preventDefault();
    // alert("form submitted....");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");

    let nameErr = document.getElementById("nameErr");
    let emailErr = document.getElementById("emailErr");
    let ageErr = document.getElementById("ageErr");

    if(name.value == ""){
        // alert("Name is required");
        nameErr.innerHTML = "Name is required";
        nameErr.style.color = "red";
    }
    else if(name.value.length < 4){
        nameErr.innerHTML = "Name should be at least 4 characters";
        nameErr.style.color = "red";
    }
    else{
        nameErr.innerHTML = name.value;
        nameErr.style.color = "green";
    }

    if(email.value == ""){
        // alert("Email is required");
        emailErr.innerHTML = "Email is required";
        emailErr.style.color = "red";
    }
    else if(!email.value.includes("@")){
        emailErr.innerHTML = "Email should contain @ symbol";
        emailErr.style.color = "red";
    }
    else{
        emailErr.innerHTML = email.value;
        emailErr.style.color = "green";
    
    }
    if(age.value == ""){
        ageErr.innerHTML = "Age is required";
        ageErr.style.color = "red";
    }
    else if(age.value < 18){
        ageErr.innerHTML = "Age should be greater than 18";
        ageErr.style.color = "red";
    }
    else{
        ageErr.innerHTML = age.value;
        ageErr.style.color = "green";
    }





    // console.log("Name ----> " + name.value);
    // console.log("Email ----> " + email.value);
    // console.log("Age ----> " + age.value);
    

    console.log("form submitted....");
    
}