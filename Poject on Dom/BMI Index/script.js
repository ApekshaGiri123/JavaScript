// submit event
const form=document.querySelector('form')

// /this will give us empty value
// const height=parseInt( document.querySelector('#height').value)


form.addEventListener('submit',function(e){
    e.preventDefault()// this method stop defualt action
    const height=parseInt( document.querySelector('#height').value)
    const weight=parseInt( document.querySelector('#weight').value)
    const result= document.querySelector('#result')
    const report= document.querySelector('#report')

    if(height===''|| height<0 || isNaN(height)){
        result.innerHTML="Please give a valid height"
    }else if (weight===''|| weight<0 || isNaN(weight)){
        result.innerHTML="Please give a valid weight"
    }else{
        const bmi = (weight/(height*height/10000).toFixed(2))
        result.innerHTML=`<span>${bmi}</span>`

        if(bmi<18.6){
            report.innerHTML="Under Weight"
        }else if(bmi<24.9){
            report.innerHTML="Normal"
        }else{
            report.innerHTML="Overweight"

        }
    }




})