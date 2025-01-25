const display = document.querySelector(".display");
const teclado = document.querySelector(".teclado");


const teclas = [
    '<','(',')','C',
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','%','+'
];

teclas.forEach((item)=>{
    
    let tecla = document.createElement('button');
    teclado.appendChild(tecla);
    tecla.textContent = item;
    tecla.value = item;
    tecla.classList.add('tecla');
    
})
    

