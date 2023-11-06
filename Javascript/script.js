/*=============typing animation ======================*/
var typed = new Typed(".typing",{
    strings:["", "Web Developer","Software Developer", "Web Designer", "Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/*================================Nav Button Color =============================*/

const nav = document.querySelector(".nav"),
      navList =  nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {  
              removeBackSection();
              
              for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active"))
                {  
                  addBackSection(j);
                  // allSection[j].classList.add("back-section");
                }
                  navList[j].querySelector("a").classList.remove("active");
                }
              this.classList.add("active");
              aside.classList.toggle("open");
              navTogglerBtn.classList.toggle("open");
              showSection(this);
          })
      }
function showSection(element)
{
for(let i=0; i<totalSection; i++){      
    allSection[i].classList.remove("active");
}
const target = element.getAttribute("href").split("#")[1];
document .querySelector("#" + target).classList.add("active")
}

function removeBackSection(){
  for(let i=0; i<totalSection; i++){      
    allSection[i].classList.remove("back-section");
}
}

function addBackSection(num){
  allSection[num].classList.add("back-section");
}

function updateNav(element){
     for(let i=0;i<totalSection;i++){
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
        navList[i].querySelector("a").classList.add("active");
      }
     }
}
document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);

})



navTogglerBtn.addEventListener("click",()=>{
    asideSectionTogglerBtn();
  })

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");   
  }

  /*====================== contact form====================*/

  const contactForm =document.getElementById('contact__form'),
  contactName= document.getElementById('contact__name'),
  contactEmail= document.getElementById('contact__email'),
  contactSubject = document.getElementById('contact__subject'),
  contactMessage = document.getElementById('contact__message'),
  errorMessage = document.getElementById('error-message');

  const sendEmail=(e)=>{
    e.preventDefault();

    //check if the fields has a value
    if(contactName.value==='' || contactEmail.value=== '' || contactMessage.value=== '' || contactSubject === '') {
      if(errorMessage.classList.contains('color-first')){
        errorMessage.classList.remove('color-first');
        errorMessage.classList.add('error__message');
      }
      errorMessage.textContent = "Please fill in all the fields";
      setTimeout(()=>{
        errorMessage.textContent='';
      },4000);
    }
    else{
      emailjs.sendForm('service_wq0jj22','template_57irq9u','#contact__form','XBP79IeBT1tzjNdhq').then(()=>{
        errorMessage.classList.remove('error__message');
        errorMessage.classList.add('color-first');
        errorMessage.textContent='Message Sent ✔️';
        window.alert("Message sent successfully.\nThank you for contacting Me.");
        
        setTimeout(()=>{
          errorMessage.textContent='';
        },5000);
      },(error)=>{
        alert('OOPs! SOMETHING WENT WRONG...',error);
      });
      contactName.value='';
      contactEmail.value='';
      contactSubject.value='';
      contactMessage.value='';
    }
  };
  contactForm.addEventListener('submit',sendEmail);