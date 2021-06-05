// Menu nav scroll
var menuItens = document.querySelectorAll ('.header a[href^="#"]'); //selecionando os links

menuItens.forEach(intem => {
    intem.addEventListener('click', scrollIdClick);

});

function scrollIdClick(event) {
    event.preventDefault();

    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: to - 150,
        behavior: "smooth",
    });
};

// Menu mobile
const btnMobile = document.getElementById('btn--mobile') //selecionando o botao

function toggleMenu() {
    const nav = document.getElementById('nav'); //selcionando o nav
    nav.classList.toggle('active'); // adicione caso seja tocado
};

btnMobile.addEventListener('click', toggleMenu); // evento

