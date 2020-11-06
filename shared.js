var backdrop = document.querySelector(".backdrop");
var selectPlanButton = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for(var i=0; i < selectPlanButton.length;i++){
    selectPlanButton[i].addEventListener('click',()=>{
            //   modal.style.display = 'block';
            //   modal.style.display = 'block';
            // modal.className = 'open';
            modal.classList.add('open');
            backdrop.classList.add('open');
    });
}

backdrop.addEventListener("click",()=>{
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}
// var p =

function closeModal() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    if(modal){
        modal.classList.remove('open');
    }
   
    backdrop.classList.remove('open');
}

toggleButton.addEventListener("click",()=>{
  
    // backdrop.style.display='block';
    
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
    //mobileNav.style.display = 'block';
});
