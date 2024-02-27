const menu= document.querySelector("#menu")
const menubtn= document.querySelectorAll(".menu-btn")

menubtn.forEach((btn)=>{
    btn.addEventListener("click",function (params) {
        menu.classList.toggle("visible");
        
    });
});

document.addEventListener("click",function (e) {
    if(!menu.contains(e.target)&&!menubtn[0].contains(e.target)){
        menu.classList.remove("visible")
    }
})