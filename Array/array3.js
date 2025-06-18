var users = ["ridhi","sidhi","seeta","geeta","jay","anusha","prashant","ashish","ashu"]

// map : it will return new Array with same length


// var newArr = []

// users.forEach((user)=>{
//     newArr.push(user)
    
// })

// console.log(newArr);

// let x = users.map((user)=>{
//     return user.toUpperCase()
// })

// console.log(x);
// let x = users.map((user)=>{
//     return user.length > 5
// })

// console.log(x);


// filter : it will return new array with filtered data

// let x = users.filter((user)=>{
//     return user.length > 5
// })
// console.log(x);



let x = users.filter((user)=>{
    return user != "jay"
})
console.log(x);
