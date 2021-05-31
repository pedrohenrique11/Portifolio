// menu nav scroll
var menuItens = document.querySelectorAll ('.navbar a[href^="#"] ,.footer a[href^="#"]');

menuItens.forEach(intem => {
    intem.addEventListener('click', scrollIdClick);

})

function scrollIdClick(event) {
    event.preventDefault();

    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: to ,
        behavior: "smooth",
    });
}

