let precio = 59990;

let b = document.querySelector('#card-button');


b.addEventListener("click",function(){

    let i1 = document.querySelector('#input-1').value;
    let i2 = document.querySelector('#input-2').value;
    let s1 = document.querySelector('#cantidad');
    let d1 = document.querySelector('#color');
    let total = document.querySelector('#total');
    s1.innerText = i1;
    d1.style.backgroundColor = i2;
    total.innerText = precio * i1;


});

