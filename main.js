const dots = document.querySelector('#dots');
let number = 0;

const addDot = setInterval(function(){
    dots.textContent += '.';
    number++;
    if(number ===4){
        dots.textContent = '';
        number = 0;
    }
},1000);