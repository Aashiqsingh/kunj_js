const submitHandler = (event)=>{
    event.preventDefault();

    let name = document.getElementById("name")
    let age = document.getElementById("age")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")

    let nameError = document.getElementById("nameError")
    let ageError = document.getElementById("ageError")
    let emailError = document.getElementById("emailError")
    let phoneError = document.getElementById("phoneError")


    let namePattern = /^[A-Z]{1}[a-z]+$/;
    
    if(!name.value.match(namePattern)){
        // alert("Name should be in Uppercase and should end with a letter");
        nameError.innerHTML = "Name should be in Uppercase and should end with a letter";
    }
    else{
        // console.log("Name ---> ",name.value);
        nameError.innerHTML = name.value;
    }

    // let agePattern = /[^abc]+$/;
    // if(age.value.match(agePattern)){
    //     ageError.innerHTML = age.value;
    // }
    // else{
    //     ageError.innerHTML = "Age should be in numbers";
    // }


    let phonePattern = /^[6-9]{1}[0-9]{9}$/;
    if(!phone.value.match(phonePattern)){
        phoneError.innerHTML = "Phone should be in numbers";
    }
    else{
        phoneError.innerHTML = phone.value;
    }

    // aashiqsingh56789@gmail.com
    let emailPattern = /^[a-z0-9]+.@[a-z]+\.[a-z]+$/;
    if(!email.value.match(emailPattern)){
        emailError.innerHTML = "Email should be in numbers";
    }
    else{
        emailError.innerHTML = email.value;
    }


}