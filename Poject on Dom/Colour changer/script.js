const buttons=document.querySelectorAll('.box')
const body=document.querySelector("body")


buttons.forEach(function(button){
    
    button.addEventListener('click',function(e){
       
        if(e.target.id==="white"){

            body.style.backgroundColor=e.target.id
        }else if(e.target.id==="green"){

            body.style.backgroundColor=e.target.id
        }else if(e.target.id==="red"){

            body.style.backgroundColor=e.target.id
        }else if(e.target.id==="pink"){

            body.style.backgroundColor=e.target.id
        }
    })
})
