// Muda a cor da navbar quando estiver sobre a div "booking" //
window.addEventListener('scroll', alterarCorNavbar)


function alterarCorNavbar() {
    const navbar = document.querySelector('nav')
    const booking = document.querySelector('.booking')
    const bookingRect = booking.getBoundingClientRect();

    if (bookingRect.top < 50) {
        navbar.classList.add('navbar-solida');
    } else {
        navbar.classList.remove('navbar-solida');
    }
}

// CARROSSEL //
const funcionarios = document.querySelectorAll('.funcionario');
let funcionarioAtual = 0;
function mostrarSlide(index) {
    funcionarios.forEach((funcionario, i) => {
        if (i === index) {
            funcionario.style.display = 'block';
        } else {
            funcionario.style.display = 'none';
        }
    })
}

function proximo() {
    funcionarioAtual = (funcionarioAtual + 1) % funcionarios.length;
    mostrarSlide(funcionarioAtual)
}

function anterior() {
    funcionarioAtual = (funcionarioAtual - 1 + funcionarios.length) % funcionarios.length;
    mostrarSlide(funcionarioAtual);
}

document.querySelector('.anterior').addEventListener('click', anterior);
document.querySelector('.proximo').addEventListener('click', proximo);

// Mostrar o primeiro funcionário ao carregar a página //
mostrarSlide(funcionarioAtual)

// Clique botão burger para celular //
function clickMenu() {
    const burger = window.document.querySelector('#burger');
    const burgerList = window.document.querySelector('#burgerList');

    if (burgerList.style.display == 'none') {
        burgerList.style.display = 'block'
    } else {
        burgerList.style.display = 'none'
    } 
}

