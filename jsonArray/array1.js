var users = [
    {
        id : 1,
        name:"pranshul",
        age:15,
        email:"pranshul@gmail.info",
        mobile:'7826397878'
    },
    {
        id:2,
        name:"rahul",
        age:29,
        email:"rahul@gmail.com",
        mobile:'87263978'
    },
    {
        id:3,
        name:"rohan",
        age:27,
        email:"rohan@gmail.in",
        mobile:'9826397878'
    },
    {
        id:4,
        name:"ronali",
        age:24,
        email:"sonali@gmail.com",
        mobile:'8726978'
    }
]

// console.log(users);

// for(let i=0;i<users.length;i++){
//     console.log(users[i].name);
    
// }

// users.forEach((user)=>{
//     console.log(user.name);
// })


// let x = users.map((user)=>{
//     return user.name
// })
// console.log(x);

// let x = users.filter((user)=>{
//     return user.age > 20
// }).map((user)=>{
//     return user.name
// })

// console.log(x);

let x = users.filter((user)=>{
    return user.email.endsWith(".com")
})
console.log(x);
