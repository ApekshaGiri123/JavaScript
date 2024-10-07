// string interpollation
let name="Apeksha"
console.log(`My name is ${name}`)
console.log(name.length)


console.log(name.toUpperCase())
console.log(name.charAt(2))
console.log(name.indexOf('z')) 

const newName=name.slice(-8,4)
console.log(newName)




// let text="Tony-Stark"
// const suStringText=text.substring(-1,4)
// console.log(suStringText)


// let text="Tony-Stark"
// const suStringText=text.replace('S',"T")
// console.log(suStringText)


let text="Tony-Stark"
const suStringText=text.split('-')
console.log(suStringText)