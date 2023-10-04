const rotateBtn = document.querySelector('.rotate-btn');
const slides = document.querySelectorAll('.bg-slide');
const totalSlides = slides.length;
let index = 0;

rotateBtn.addEventListener('click', () => {

    rotateBtn.classList.add('active');
    setTimeout(() =>  {
        rotateBtn.classList.remove('active');
    }, 2100)

    slides.forEach(slide => {
        if(slide.classList.contains('active')){
            slide.classList.add('after-active');
        }
        else{
            slide.classList.remove('after-active');
        }
    })
    
    slides[index].classList.remove('active');

    index++;
    
    if(index == totalSlides){
        index = 0;
    }

    slides[index].classList.add('active');
})


function myFunction() {
    const x = document.querySelectorAll('.nav-item');
    x.forEach((element) => {
        if (element.style.display === "block") {
            element.style.display = "none";
          } else {
            element.style.display = "block";
          }
    })
  }

  let text = document.getElementById('text');

  window.addEventListener('scroll', () => {

    let value = window.scrollY;

    text.style.margingTop = value * 2.5 + 'px';
    
  });
