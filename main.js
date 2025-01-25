const display = document.querySelector(".display");
const teclado = document.querySelector(".teclado");
display.value = "";


const teclas = [
    '<', '(', ')', 'C',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '%', '+'
];

teclas.forEach((item) => {

    let btn = document.createElement('button');
    teclado.appendChild(btn);
    btn.textContent = item;
    btn.value = item;
    btn.classList.add('btn');

});


const botoes = document.querySelectorAll('.btn');
botoes.forEach((btn) => {
    btn.addEventListener('click', () => {
       
            display.value += btn.textContent;
        
       
        
    })
})




