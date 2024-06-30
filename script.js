let submit_button=document.querySelector(".submit")
let next_template=document.querySelector(".thank_you")
let template=document.querySelector(".rating")
const rating=document.querySelector("#rating_num")
const rates=document.querySelectorAll(".btn")

submit_button.addEventListener("click",function(){
    document.querySelector(".rating").style.display="none"
    document.querySelector(".Thank_you").style.display="block"
})

rates.forEach((rate)=> {
    rate.addEventListener("click",() =>{
        rating.innerHTML=rate.innerHTML
    })
})