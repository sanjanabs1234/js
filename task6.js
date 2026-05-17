//task 1//
let presentstudent=["rahul","anu","manoj"]
let absentstudent=["ravi","megha"]
let allstudent=[...presentstudent,...absentstudent]
allstudent.push("sanjana")
console.log(allstudent)


//task 2//
let details={
    brand:"galaxy",
    price:45000
};
let charger={
    type:"fast charging",
    warranty:"1 year"
};
let final={
    ...details,...charger,
    deliverydate:"26 may 2026"
}
console.log(final)


//task 3//
let food=["pizza","burger","fries"];
let newitem=[...food,"coke"];
console.log("items orderd:",newitem);
console.log("total:",newitem.length);
console.log("first:",newitem[0]);
console.log("last:",newitem[newitem.length-1]);


//task 4//
let employee=[
    {name:"sanj",sal:40000},
    {name:"john",sal:55000},
    {name:"don",sal:60000}
]
let filteremp=employee.filter((emp)=>emp.sal>50000);
console.log(filteremp);


//task 5//
let score=[50,70,90,40,60]
let total=score.reduce((total,score)=>total+score);
console.log("final total:",total);