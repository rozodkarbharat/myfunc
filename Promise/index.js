
// what id promise?
// promise is an object represents eventual completion or faliure of an asyncronous operation and its resulting value .


var cart=["shirt","pants","shoes"]

const promise=createOrder(cart)
console.log(promise)
promise.then((orderId) => {
    console.log(1)
    return ProceedToPayent(orderId)
}).then((elem)=>{
    console.log(elem,2);
   return showOrderSummery(cart);
})
.then((elem)=>{
    console.log(elem,3)
    return updateWaller();
})
.then((elem)=>{
   console.log(elem,4)
})
.catch((err)=>{
    console.log(err,"err")
})

function createOrder(cart){
const pr=new Promise((resolve,reject)=>{
   if(!validate()){
    var err=new Error("Validation failed")
    reject(err)
   }
   var orderId=52154
   if(orderId){
    setTimeout(()=>{
        resolve(orderId);
    },5000);
   
   }
})
return pr
}

function validate(){
    return true
}

function ProceedToPayent(orderId){
var pr=new Promise((resolve,reject)=>{
    resolve(orderId)
})
return pr
}

function showOrderSummery(cart){
var pr=new Promise((resolve,reject)=>{
    resolve("Order is Place successfully")
})
return pr
}

function updateWaller(){
   var pr = new Promise((resolve, reject) => {
     resolve("2000 rs");
   }); 
   return pr
}