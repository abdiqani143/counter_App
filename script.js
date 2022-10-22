

const counts=document.querySelector(".count");
const addCount=document.querySelector(".add");
const subractionCount=document.querySelector(".subtraction");
const resetCount=document.querySelector(".reset");

addCount.addEventListener("click",()=>{
    counts.innerHTML++;
});
subractionCount.addEventListener("click",()=>{
    counts.innerHTML--;
});
resetCount.addEventListener("click",()=>{
    counts.innerHTML=0;
});