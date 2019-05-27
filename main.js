

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.pics');



nextBtn.addEventListener('click', nextSlide);

prevBtn.addEventListener('click', prevSlide);

let counter = 0;

//add animate?
function nextSlide() {

if(counter === 3) {
    counter= -1;
}

    counter++;
    container.style.backgroundImage = `url(img/DSC-${counter}.jpg)`;
   
    
};


function prevSlide() {
    if(counter === 0){
        counter = 4;
    }

    counter--;
    container.style.backgroundImage = `url(img/DSC-${counter}.jpg)`;
   
    
};
