
document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

cards.forEach(card=>observer.observe(card));

const botoes = document.querySelectorAll(".botao");

botoes.forEach(botao=>{

botao.addEventListener("mouseenter",()=>{

botao.style.transform="scale(1.05)";

});

botao.addEventListener("mouseleave",()=>{

botao.style.transform="scale(1)";

});

});

});
