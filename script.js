let num = document.querySelector("p");
let count = 0;
num.innerHTML = count;


let increase = document.querySelector("#increase")
increase.addEventListener("click", ()=> {
    count++;
    num.innerHTML = count;
});

let reset = document.querySelector("#reset")
reset.addEventListener("click", ()=> {
    count = 0;
    num.innerHTML = count;
});

let decrease = document.querySelector("#decrease")
decrease.addEventListener("click", ()=> {
    if(count > 0){
        count--; 
        num.innerHTML = count;
    }
});
