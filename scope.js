//task 1//
function welcomeuser(parameter){
    console.log("welcome "+parameter)
}
welcomeuser("naveen")


//task 2//
function squarenumber(num){
    return num*num
}
console.log(squarenumber(5))


//task 3//
var obj1={
    name:"rahul",
    sal:50000
  
}
function employeebonus(bonus){
    console.log(obj1.sal+bonus)

}

employeebonus(5000)


//task 4//
function scope(parameter){
    if(true){

    var a="sanjana"
    let b="sandhya"
    const e ="soniya"
    console.log(b)
    console.log(e)
}
console.log(a)

}
scope()


//task 5//
let arrow=(a,b)=>{
    console.log(a+b)
}
arrow(20,30)


//task 6//
function multiply(s,d){
    return s*d

}
function calculator(callback,s,d){ 
    console.log(callback(s,d)) // it internally calls multiply(5,2)
}
calculator(multiply,5,2)//multiply is the callback function


//task 7//
function*offers(){
    yield("50% off")
    yield("free delivery")
    yield("cashback")

}
let gen=offers()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())


//task 8//
function student(name,age,course="javascript") {
    console.log("name:"+name)
    console.log("age:"+age)
    console.log("course:"+course)
    
}
student("sanjana",22)


//task 9//
function a1(f1)
{
    return function(f2){
        return function(f3){
            console.log(f1*f2*f3)

        }
    }

}
a1(2)(3)(4)


//task 10//
let arr1=[1,2,3]
let arr2=[4,5,6]
let total=[...arr1,...arr2]
console.log(total)


//task 11//
let obj4={
    name:"navi",
}
let obj5={
    role:"developer"
}
let total1={...obj4,...obj5}
console.log(total1)


//task 12//
function numbers(a,b,...c){
    console.log([a,b,...c])
    console.log(a+b+c[0]+c[1])
}
numbers(1,2,3,4)


//task 13//
//using rest operator//
let students=[]
function addstudents(...std){  
    students.push(...std)
}
//object//
addstudents(
    {name:"sanjana",marks:80},
    {name:"navi",marks:70}
)//callback function using//
function calculate(students,callback){
    console.log(callback(students))
}
console.log(students)
calculate(students[0],function(s){
    return s.marks

})//spread operator//
let bonus=students.map((s)=>{
    return{
        ...s,
        marks:s.marks+5
    }
})//bonus marks//
console.log(bonus)


