const myArray=[0,1,4,,6,2,true,"jk"]

console.log(myArray[0])
const a=new Array(1 ,2,4,"lkjg")
console.log(a)

///array create  always shallow copy

//Methods

// Push=add element in array
a.push("Hi")
console.log(a)
 
// Pop -remove last element
a.pop()
console.log(a)



// slice

// const myArr=[0,1,2,3,4,5,6]
// console.log("original- ",myArr)
// const slice=myArr.slice(1,3)
// console.log("After slice original array- ",myArr)
// console.log("slice element- ",slice)


// splice 
const myArr=[0,1,2,3,4,5,6]
console.log("original- ",myArr)
const splice=myArr.splice(1,3)
console.log("After splice original array- ",myArr)
console.log("splice element- ",splice)