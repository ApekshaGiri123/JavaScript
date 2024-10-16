
const a=[1,4,3,2,5,5]

const val=a.forEach((i)=>{
    console.log(i)
    return;
})
// console.log(val)  // for each does not return anything

const ans=a.filter((i)=>i>3)
console.log(ans)

const z=a.map((i)=>i+10)
console.log(z)