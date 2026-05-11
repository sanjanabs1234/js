//task 1//
console.log("10"+5)//output is 105
console.log(typeof("10+"+5))//data type is string


console.log(10+true)//output is 11 because true means its 1
console.log(typeof(10+true))//data type is number


console.log(false+null)//output is 0
console.log(typeof(false+null))//data type is number because the value of null is 0


console.log("hello"+undefined)//output is helloundefined
                              //undefined doesnt include any value
console.log(typeof("hello+undefined"))//datatype is string


console.log([1,2]+5)//output is 1,25
console.log(typeof([1,2]+5))//datatype is string


//task 2//
console.log("6"+12)//output is 612
console.log(typeof("6"+12))//data type id string


console.log(true+2)//output is 3
console.log(typeof(true+2))//data type is number


console.log([1,2,3]+"3")//output is 1,2,33
console.log(typeof([1,2,3]+"3"))//datatype is string


console.log({k:2}+2)//output is [object object]2
console.log(typeof{l:2}+2)//data type is object2


console.log(null+3)//output is 3
console.log(typeof(null+3))//datatype is number


//task 3//
console.log(Number("500"))//output is 500
console.log(typeof(Number("500")))//datatype is number


console.log(Number(true))//output is 1
console.log(console.log(Number(true)))//datatype is number


console.log(Number(false))//output is 0
console.log(typeof(Number(false)))//datatype is number


console.log(Number("abc"))//output is NaN(not an number)
console.log(typeof(Number("abc")))//datatype is number


console.log(Number([100]))//output is 100
console.log(typeof(Number([100])))//datatype is Number


//task 4//
console.log(Boolean("javascript"))//output is true
console.log(typeof(Boolean("javascript")))//datatype is boolean


console.log(Boolean(0))//output is false
console.log(typeof(Boolean(0)))//datatype is Boolean


console.log(Boolean(1))//output is true
console.log(typeof(Boolean(1)))//datatype is boolean


console.log(Boolean(null))//output is false
console.log(typeof(Boolean(null)))//datatype is boolean


console.log(Boolean(undefined))//output is false
console.log(typeof(Boolean(undefined)))//datatype is boolean


console.log(Boolean([1,2,3]))//output is true
console.log(typeof(Boolean([1,2,3])))//datatype is boolean


console.log(Boolean({k:1}))//output is true
console.log(typeof(Boolean({k:1})))//datatype is boolean


//task 5//
let mark=45
if(mark>35){
    console.log("pass")
}else
console.log("fail")


//task 6//
let age=20
if(age > 18){
    console.log("eligible")
}else
if(age<18){
    console.log("not eligible")
}


//task 7//
let a=50
let b=80
let c=30
if(a>b && a>c){
    console.log("a")
}
else if(b>a && b>c){
    console.log("b")
}
 else{
    console.log("c")
 }
 


 //task 8//
 let x=prompt()
 switch (x) {
    case "red":console.log("stop")
        
        break;
        
 case "yellow": console.log("ready")
        
        break; 
    
        case "green":console.log("go")
        
        break;
 
    default:
        console.log("invalid")
        break;
 }


 //task 9//
 let username="admin"
 let password="1234"
 let s="admin"
 let d="1234"
 if(s===username){
    if(d===password){
        console.log("login sucess")}
    else{
        console.log("invalid login")

    }
}
else{
    console.log("invalid login")
}



//task 10//
let hour=18
if(hour<=12){
    console.log("morning")
}else if(hour<=15){
    console.log("afternoon")
}else if(hour<=19){
    console.log("evening")
}else if(hour<=24){
    console.log("night")
}


//bonus challenge//
console.log(true + true)//output is 2


console.log("5" - 2)//output is 3


console.log("5" +  2)//output is 52


console.log(null + 1)//output is 1


console.log(undefined + 1)//output is NaN


console.log(Boolean(""))//output is true


console.log(Number(true))//output is 1



 




