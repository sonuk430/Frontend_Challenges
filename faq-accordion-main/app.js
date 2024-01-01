const quationsEl = document.querySelectorAll(".quations");

// console.log(quationsEl);

quationsEl.forEach(element => {
    const plusEl = document.querySelectorAll(".plus");
    const minusEl =  document.querySelectorAll(".minus");
    
    element.addEventListener("click",()=>{
        console.log("hello");
        plusEl.style.display = "block";
    })
    
});

