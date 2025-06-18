var users = ["ridhi","sidhi","seeta","geeta","jay","anusha","prashant","ashish","ashu"]


// const deleteUser = (userName)=>{

//     let x = users.filter((user)=>{
//         return user != userName
//     })


//     return x
// }


// let x = deleteUser("ashish")
// console.log(x);


// ----------------------------------------------------------

// const deleteUser = (userName)=>{

//     return users.filter((user)=>{
//         return user != userName
//     })
// }


// let x = deleteUser("sidhi")
// console.log(x);

// ----------------------------------------------------------

// const deleteUser = (userName)=>{

//     return users.filter((user)=> user != userName)
// }


// let x = deleteUser("seeta")
// console.log(x);


// ----------------------------------------------------------
const deleteUser = (userName)=> users.filter((user)=> user != userName)



let x = deleteUser("seeta")
console.log(x);