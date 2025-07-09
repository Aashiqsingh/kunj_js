const submit = ()=>{
    let name = document.getElementById("name")
    let age = document.getElementById("age")

    // console.log(name.value , age.value);

    localStorage.setItem("name",name.value)
    localStorage.setItem("age",age.value)




    
    
}



function getData(){

    let result = document.getElementById("result")

    let name = localStorage.getItem("name")
    let age = localStorage.getItem("age")



    result.innerHTML = name + " " + age
}

const deleteData = ()=>{
    localStorage.clear();
}