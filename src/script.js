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


// Icons modal function
function showedModal (modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('showed');
    modal.addEventListener('click', () => modal.classList.remove('showed'))
}

//const icons
const javaScriptModal = document.querySelector('.icon__js');
javaScriptModal.addEventListener('click', () => showedModal('modal-js'));

const htmlModal = document.querySelector('.icon__html');
htmlModal.addEventListener('click', () => showedModal('modal-html'));

const cssModal = document.querySelector('.icon__css');
cssModal.addEventListener('click', () => showedModal('modal-css'));

const reactModal = document.querySelector('.icon__react');
reactModal.addEventListener('click', () => showedModal('modal-react'));

const nodeJSModal = document.querySelector('.icon__nodejs');
nodeJSModal.addEventListener('click', () => showedModal('modal-nodejs'));

const cModal = document.querySelector('.icon__c');
cModal.addEventListener('click', () => showedModal('modal-c'));

const angularModal = document.querySelector('.icon__angular');
angularModal.addEventListener('click', () => showedModal('modal-angular'));

const JavaScriptModal2 = document.querySelector('.icon__js2');
JavaScriptModal2.addEventListener('click', () => showedModal('modal-js'));