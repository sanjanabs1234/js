//task 1//
let d="https://jsonplaceholder.typicode.com/users"
fetch(d).then(res=>res.json()).then(data=>{
    let result=data.map(c => c.username.toUpperCase())
    console.log(result)

})

//task 2//
let expensive="https://fakestoreapi.com/products"
fetch(expensive).then(res=>res.json()).then(data=>{
    let result=data.filter(c=>c.price>100)
    console.log(result)
})

//teask 3//
let m=new Date()
let hour=m.getHours()
let minute=m.getMinutes()
let second=m.getSeconds()
console.log(hour+":"+minute+":"+second)

//task 4//
let name=" Naveen kumar "
let another=name.trim().toUpperCase()
console.log(another.includes("KUMAR"))
console.log(another)

//task 5//
let mark=[450,300,700,200,900]
let res=mark.sort((a,b)=>b-a)
let topp=res.slice(0,3)
console.log(top)

