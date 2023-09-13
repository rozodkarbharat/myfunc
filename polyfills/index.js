
// Polyfill for Map 
Array.prototype.myMap = function(callback){
    let newArray=[]
    this.forEach((elemnt,index) => {
        newArray.push(callback(elemnt,index,this))
    })
    return newArray
}

let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(arr.myMap(function(elemnt){
    return elemnt*2
}))

var name ="bharat"

let obj={
    name :'n',
    printname:function(){
        let name='aish'
        console.log(this.name)
    },
    pname:()=>{
        console.log(this.name)
    }
}


