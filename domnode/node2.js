var employees = [
    {
        id: 1,
        name: "rahul",
        age: 25,
        salary: 1000,
        status: true,
        url:""
    },
    {
        id: 2,
        name: "kiran",
        age: 22,
        salary: 2000,
        status: false
    },
    {
        id: 3,
        name: "deepak",
        age: 23,
        salary: 3000,
        status: true
    },
    {
        id: 4,
        name: "prashant",
        age: 24,
        salary: 4000,
        status: false
    },
    {
        id: 5,
        name: "bhuwan",
        age: 28,
        salary: 5000,
        status: true
    }
]

console.log(employees);
let thead = document.getElementById("thead");
thead.style.display = "none";


const addData = () => {
    thead.style.display = ""
    let tbody = document.getElementById("tbody");

    for (let i = 0; i < employees.length; i++) {
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let nameTd = document.createElement("td");
        let ageTd = document.createElement("td");
        let salaryTd = document.createElement("td");
        let statusTd = document.createElement("td");


        idTd.innerHTML = employees[i].id;
        nameTd.innerHTML = employees[i].name;
        ageTd.innerHTML = employees[i].age;
        salaryTd.innerHTML = employees[i].salary;
        statusTd.innerHTML = employees[i].status;



        tbody.appendChild(tr);
        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(ageTd);
        tr.appendChild(salaryTd);
        tr.appendChild(statusTd);
    }
}