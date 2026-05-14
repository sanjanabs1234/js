//task 1 student registartaion form//
  let a=prompt("enter your name")
  let b=prompt("enter your department")
  const c=prompt("enter your age")
  console.log(`welcome ${a}`)
  console.log(`department: ${b}`)
  console.log(`age: ${c}`)


  //task 2 ATM Withdrawal system//
  var balance=10000
  var bonus=100
  var amount=5000
  if(amount>=bonus && amount<=balance+bonus){
    console.log("transition successful")
  }else{
    console.log("insufficient balance")
  }


  //task 3 swiggy discount checker//
  var orderamount=560
  orderamount>499?console.log("free delivery"): console.log("delivery charges applied")


  //task 4 instagram login system//
  let username="admin"
  let password=1234
  let name=prompt("username")
   if(username==name){
    console.log("ask password")
  let psswd=prompt("password")
    if(password==psswd){
        console.log("login sucessfully")
    }
  } else {
    console.log("invalid username")
  }


//task 5 traffic signal system//
var x= prompt("red","yellow","green")
switch (x) {
    case "red":console.log("stop")
        
        break;

    case "yellow": console.log("ready")
        
        break;


    case "green":console.log("go")
        
        break;

    default:
        console.log("invalid")
}


//task 6 Employee salaary calculator//
function salarycalculation(sal,bonus)
{
    return sal+bonus
    
}
console.log(salarycalculation(25000,5000))


//task 7 E-coomerce cart total//
let prices=[100,200,300,400]
let total=0
for(let price of prices) {
  total=total+price
}
console.log("total price:"+total)
console.log("average price:"+total/prices.length)


//task 8 whatsapp contact book//
let contact={
  name:"sanjana",
  phone:738383893,
  status:"online"

}
for(let s in contact){
  console.log(s +":" + contact[s])
}


////task 9 movie ticket bookibg//
function payment(){
  console.log("payment succesful")
}
function book(callback){
  console.log("booking complete")
  callback()
}
book(payment)


//task 10 food delivery time tracker//
function* orderstatus(){
  yield "order confirmed"
  yield "preparing food"
  yield "out for deliver"
  yield "delivered"
}
let status=orderstatus();
console.log(status.next().value)
console.log(status.next().value)
console.log(status.next().value)
console.log(status.next().value)

