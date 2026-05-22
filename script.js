let productsDiv=
document.getElementById(
"products"
)

let message=
document.getElementById(
"message"
)

let allproducts=[]

let cart=[]

let cartcount=0

let total=0



fetch(
"https://fakestoreapi.com/products"
)

.then((response)=>{

return response.json()

})

.then((data)=>{

allproducts=data

message.innerText=""

showProducts(data)

})

.catch(()=>{

message.innerText=
"Error loading"

})



function showProducts(data){

productsDiv.innerHTML=""

data.forEach((product)=>{

let card=
document.createElement(
"div"
)

card.className=
"card"

card.innerHTML=`

<img src=
"${product.image}">

<h3>

${product.title
.slice(0,20)}

</h3>

<p>

${product.description
.slice(0,50)}

</p>

<p class="price">

$ ${product.price}

</p>

<button>

Add To Cart

</button>

`

card.querySelector(
"button"
)

.addEventListener(
"click",

()=>{

addToCart(product)

}

)

productsDiv.append(
card
)

})

}



document
.getElementById(
"search"
)

.addEventListener(
"input",

function(){

let value=
this.value
.toLowerCase()

let filtered=

allproducts.filter(

product=>

product.title

.toLowerCase()

.includes(value)

)

showProducts(
filtered
)

}

)



function filterCategory(
category
){

let filtered=

allproducts.filter(

product=>

product.category
===category

)

showProducts(
filtered
)

}



function addToCart(
product
){

cart.push(
product
)

cartcount++

total=
total+
product.price

document
.getElementById(
"count"
)

.innerText=
cartcount

document
.getElementById(
"total"
)

.innerText=
total.toFixed(2)

showCart()

}



function showCart(){

let cartDiv=

document
.getElementById(
"cartItems"
)

cartDiv.innerHTML=
""

cart.forEach(

(item,index)=>{

cartDiv.innerHTML
+=`

<div>

<p>

${item.title}

</p>

<p>

$${item.price}

</p>

<button
onclick=
"removeCart(
${index}
)"

>

Remove Cart

</button>

</div>

`

}

)

}



function removeCart(
index
){

total=

total-

cart[index]
.price

cart.splice(
index,
1
)

cartcount--

document
.getElementById(
"count"
)

.innerText=
cartcount

document
.getElementById(
"total"
)

.innerText=
total.toFixed(2)

showCart()

}
//output//
//add to cart//
//total//
//remove cart at in last stored in the down//
//prices//
//search//