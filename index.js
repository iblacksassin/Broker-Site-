//
const counters = document.querySelectorAll(".counter span");
const container = document.querySelector(".counter");
const speed = 97
let activated = false;
window.addEventListener("scroll", () => {
   if(
      pageYOffset > container.offsetTop - container.offsetHeight - 200
      && activated === false
   ) {

      counters.forEach(counter => {
         counter.innerText = 0;

         let count = 0;

         function updateCount() {
            const target = parseInt(counter.dataset.count);
            if(count < target) {
               count++;
               counter.innerText = count;
               setTimeout(updateCount, 0.01);
            } else {
               counter.innerText = target;
            }
         }

         updateCount();
         activated = true;
      });
   } else if(
      pageYOffset < container.offsetTop - container.offsetHeight - 500
      || pageYOffset === 0
      && activated ===true
   ) {
      counters.forEach(counter => {
         counter.innerText = 0;
      });
      activated = false;
   }
});

//profile slider

 
var swiper = new Swiper(".slide-content", {
   slidesPerView: 3,
   spaceBetween: 25,
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },

   breakpoints:{
       0: {
           slidesPerView: 1,
       },
       520: {
           slidesPerView: 2,
       },
       950: {
           slidesPerView: 3,
       },
   },
 });
