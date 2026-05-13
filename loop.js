//1)
for(var a=1;a<=20;a++)
    console.log(a)


//2)
for(var b=1;b<=50;b++)
    if(b%2==1){

        console.log(b)
    }


//3)
for(var c=7;c<=100;c++)
    if(c%7==0){
        console.log(c)
    }


//4)

 var d=20;
 while(d>=1){
     console.log(d)
     d--
    
 }


//5)
 var sum=0
 for(let e=1;e<=100;e++){
     sum=sum + e;
 }
 console.log(sum)


//6)
let fruits=["apple","banana","orange","grapes"]
for(let q of fruits){
    console.log(q)
}


//7)
var count=0
for(let f=1;f<=50;f++){
    if(f%2==0){
        count++
    }
}
console.log(count)


//8)
let star=""
for(let g=1;g<=5;g++){
    star=star+"*"
    console.log(star)
}


//9)
function welcome(){
    console.log("welcome to javascript")
}
welcome()


//10
function greet(name){
    console.log("hello " + name)
}
greet("Naveen")


//11)
function add(a,b){
return a+b;
}
console.log(add(10,20))


//12)
function totalsal(sal,bonus){
    return sal+bonus
}
console.log(totalsal(50000,5000))


//13)
let student={
    name: "rahul",
    course:"javascript",
    marks:"95"
}
for(let w in student){
    console.log(w+":"+student[w])

}
//14)
function larg(a,b){
    if(a>b){
        return a
    }else{
        return b
    }
}
console.log(larg(10,50))


//15)
let employee={
    name:"john",
    department:"CS",
    sal:50000,
    bonus:5000

}
function total(sal,bonus){
    return sal + bonus
}
console.log("employee name:"+employee.name)
console.log("department:"+employee.department)
console.log("sal:"+employee.sal)
console.log("sal after bonus:"+total(employee.sal,employee.bonus))