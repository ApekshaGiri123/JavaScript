const clock=document.getElementById('clock')
// console.log(date.toLocaleTimeString())


// setInterval-kitne time pr task perform karna hai
setInterval(function(){
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString()
},1000)