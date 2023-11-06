/*============== toggle style switcher============*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll
// window.addEventListener("scroll",()=>{
//     if(document.querySelector(".style-switcher").classList.contains("open")){
//         document.querySelector(".style-switcher").classList.remove("open");
//     }
// })

/*---========================================== Theme Colors================================================*/

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach( (style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    });
    document.querySelector(".style-switcher").classList.toggle("open");
}
/*---========================================== Theme light and dark mode================================================*/

const dayNight = document.querySelector(".day-night");
let homeImage=document.getElementById("Img");

dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        homeImage.src="images/B&W.jpg";
    }
    else{
        homeImage.src="images/Col.jpg"
    }
    
})
 window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
 })
