function fun(){
    console.log("H")
    console.log("E")
    console.log("L")
    console.log("L")
    console.log("O")
}
fun()


// function sum(a,b){//parameter
//     console.log(a+b)
// }
// const res=sum(8,5)//arguments
// console.log(res)//undefined 


function sum(a,b){//parameter
    return a+b
}
const res=sum(8,5)//arguments
console.log(res)//undefined 

const user={
    name:"ABC",
    age:24
}
function info(anyobject){
    console.log(`My name is ${anyobject.name} and age is  ${anyobject.age}`)

}
info(user)