var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"geeta",
                age:32,
                gender:"female",
                isActive:true
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"siya",
                age:35,
                gender:"female",
                isActive:true
            },
            {
                name:"axit",
                age:37,
                gender:"male",
                isActive:true
            },
            {
                name:"payal",
                age:39,
                gender:"female",
                isActive:true
            },
            {
                name:"sunit",
                age:42,
                gender:"male",
                isActive:false
            }
            
        ]
    },
]

// let x = departments.map((depart)=>{
//     return depart.name
// })
// console.log(x);


// let x = departments.map((depart)=>{
//     return depart.employees.filter((emp)=>{
//         return emp.gender === "male"
//     })
// })
// console.log(x);



// departments.forEach((depart)=>{
//     depart.employees.forEach((emp)=>{
//         if(emp.gender === "male"){
//             console.log(emp);
            
//         }
        
//     })
// })

// var x =departments.filter((user)=>{
//     return user.name === "Finance"
// }).filter((user)=>{
//     user.employees.gender == "female"
// })
// console.log(x);


// let x = departments.find((depart)=> depart.name === "Finance").employees.filter((emp)=> emp.gender === "female")
// console.log(x);

// var x = departments.map((user)=>{
//     return user.employees.filter((user)=>{
//     return user.age > 30
// })
// })
// console.log(x);

var x = departments.map((user)=> user.employees.filter((user)=>user.age>30))
console.log(x);