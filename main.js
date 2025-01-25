const display = document.querySelector(".display");
const teclado = document.querySelector(".teclado");


const teclas = [
    '<','(',')','C',
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','%','+'
];

teclas.forEach((element)=>{
    element= document.createElement('button');
    teclado.appendChild(element);
})
    

