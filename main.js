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
    let whiteFlag = false;
document.querySelector('button').addEventListener('click',function(){
    if (whiteFlag === false){
        document.body.style.backgroundColor = 'white';
        whiteFlag = true;
    }
    else if(whiteFlag === true){
        document.body.style.backgroundColor = 'rgba(10,20,30,1)';
        whiteFlag = false;
    }
})