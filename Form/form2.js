const submitHandler = (event)=>{
    event.preventDefault();

    let name = document.getElementById("name")
    let age = document.getElementById("age")
    let gender = document.getElementsByName("gender")

    let ans = document.getElementById("ans")

    let gen = ''

    if(gender[0].checked){
        gen = 'Male'
    }
    else if(gender[1].checked == true){
        gen = 'Female'
    }
    else if(gender[2].checked == true){
        gen = 'Other'
    }

    console.log("Name ---> ",name.value);
    console.log("Age ---> ",age.value);
    console.log("Gender ---> ",gen);

    if(gen == "Male"){
        if(age.value > 18){
            ans.innerHTML = "You are eligible for the scholarship";
        }
        else{
            ans.innerHTML = "You are not eligible for the scholarship";
        }
    }
    else if(gen == "Female"){
        if(age.value > 21){
            ans.innerHTML = "You are eligible for the scholarship";
        }
        else{
            ans.innerHTML = "You are not eligible for the scholarship";
        }
    }
    else{
        if(age.value > 25){
            ans.innerHTML = "You are eligible for the scholarship";
        }
        else{
            ans.innerHTML = "You are not eligible for the scholarship";
        }
    }
    


    // console.log(gender);
    
}