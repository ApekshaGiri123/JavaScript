// var c=90
// if(true){
//     // let a=10
//     // const b=20
//     var c=30

// }
// console.log(c)//30



let c=90
if(true){
    // let a=10
    // const b=20
    let c=30

    console.log("inner",c)//30
}
console.log(c)//90



//nested functions
function one(){
    const userName="SIA"
    function two(){
        const name="GIRL"
        console.log(userName)//SAI

    }
    two()
    // console.log(name)//error 

}
one()

//arrow function

const fun=()=>{
    const name="FUN"
    console.log(this.name)//undefined
    console.log(this)//{}
}
fun()



// this-give ref of current object
