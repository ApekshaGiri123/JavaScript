// const user={}
// user.id=123
// user.name="hitedhs"
// console.log(user)

user={
    id:123,
    name:{
        name:"hello"
    }
}
console.log(user.name.name)


// assign
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4)