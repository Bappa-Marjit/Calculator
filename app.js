let h2 = document.querySelector("h2");
let allBtn = document.querySelectorAll(".btn");
let input = document.querySelector("input");
let header = document.querySelector(".headBox")

let str = "";



for (btns of allBtn) {
    btns.addEventListener("click",function(e){
        if(e.target.innerText == "="){
            str = eval(str);
            input.value = str;
        }else if(e.target.innerHTML == "AC"){
            str = ""
            input.value = str;
        }else if(e.target.innerHTML == "↩"){
            input.value = input.value.toString().slice(0,-1);
            str = input.value;
        }
        else{
            str+=e.target.innerHTML;
            input.value = str;
            console.dir(e);
        }
    });
};

