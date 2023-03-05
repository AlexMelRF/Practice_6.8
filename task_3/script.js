const trafficLightGreen = document.querySelector('.greenLight');
const trafficLightYellow = document.querySelector('.yellowLight');
const trafficLightRed = document.querySelector('.redLight');
let toggle = 0;

function changeColor() {
    switch (toggle) {
        case 0:
            trafficLightGreen.style.background = ('green');
            trafficLightRed.style.background = ('black');
            toggle = 1;
            break;
        case 1:
            trafficLightYellow.style.background = ('yellow');
            trafficLightGreen.style.background = ('black');
            toggle = 2;
            break;
        case 2:
            trafficLightRed.style.background = ('red');
            trafficLightYellow.style.background = ('black');
            toggle = 0;
            break; 
    }
}

trafficLightGreen.addEventListener('click', changeColor);
trafficLightYellow.addEventListener('click', changeColor);
trafficLightRed.addEventListener('click', changeColor);



