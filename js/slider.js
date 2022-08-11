
const slider = document.querySelector("#slider"); // Obtenemos el Slider 
let sliderSection = document.querySelectorAll(".slider__section"); // Obtenemos las secciones
let sliderSectionLast = sliderSection[sliderSection.length-1]; //Obtenemos la ultima imagen

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

btnRight.addEventListener('click', Next)

btnLeft.addEventListener('click', Prev)

slider.insertAdjacentElement('afterbegin', sliderSectionLast); //Pasamos la ultima imagen al principio (para que haya algo cuando pulsamos el boton derecho)

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    },500);
}

function Prev(){
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "al 0.5s";
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    },500);
}
