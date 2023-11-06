
const trial = document.querySelector('.card_anchor');
const text = document.querySelector('.para_title');
trial.addEventListener('mouseover',()=>{
    text.setAttribute("style", "color:blue;")
    console.log("hover is successfull!");
},false)
trial.addEventListener('mouseout',()=>{
    text.setAttribute("style","color:black;")
},false)

