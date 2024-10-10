// const user={}
// user.id=123
// user.name="hitedhs"
// console.log(user)
const mySym=Symbol("Key1")
user={
    id:123,
    name:{
        name:"hello"
    },
    [mySym]:"Key"


}
console.log(user.name.name)


// assign
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4)



console.log(Object.keys(user))//[ 'id', 'name' ] 


console.log(Object.values(user))//[ 123, { name: 'hello' } ]



console.log(user[mySym])


//entries()-> R  eturns an array of key/values of the enumerable own properties of an object

console.log(Object.entries(user))//[ [ 'id', 123 ], [ 'name', { name: 'hello' } ] ]



//tell us given oject have property or not
console.log(user.hasOwnProperty("name"))



//  destructuring the object

const coarse={
    name:"ABC",
    price:99,

}

const{name,price}=coarse
console.log(name,price)


const{name:a,price:b}=coarse
console.log(a,b)