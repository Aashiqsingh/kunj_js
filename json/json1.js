// json -- > Javascript object notation
// json --> format

// var student = {
//     id:1,
//     name:"kunj",
//     age:20,
//     email:"kunj@gmail.com",
//     phone:8632483832
// }


// // console.log(student);
// // console.log(typeof student);

// console.log(student.name);
// console.log(typeof student.name);

// console.log(student.age);
// console.log(typeof student.age);



var product = {
    id:1011,
    name:"iphone",
    price:1000,
    color:["red","green","blue"],
    isAvailable:true,
    details:{
        brand:"apple",
        model:"iphone 11",
        memory:64,
        storage:128,
        screen:["12.3","13.5","14.6"],
        camera:["5","6","7"],
        processor:"a12",
        ram:8,
    }
}

console.log(product)
console.log(product.name);
console.log(product.color);
// console.log(product.color[0]);

for(let i=0;i<product.color.length;i++)
{
    console.log(product.color[i]);
    
}

console.log(product.details.storage);
console.log(product.details);
console.log(product.details.brand);




