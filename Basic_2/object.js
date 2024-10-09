// singleton-Object.create

// object literals

const sym=Symbol("key")
const user={
    name:"ABC",
    age:23,
    location:"Pune",
    email:"abc@gmail.com",
    [sym]:"key2"

}
console.log(user.email)
console.log(user["email"])
console.log(user)
Object.freeze(user)///no one can change now user

user.myFun=function(){
    console.log("hello user ")
}

user.myFun2=function(){
    console.log(`hello user ${this.name}`)
}
// console.log(user.myFun())
// console.log(myFun2)