//PAGE LOADER
$(document).ready(()=>{
    setTimeout(()=>{
        $('.loader-wrapper').slideUp('slow', () => {
            $('body').removeClass('loading');
			AOS.init();
        });
    },800);
});

//QUANDO CLICAR EM UM LINK FAZER UMA TRANSIÇÃO DE PAGE LOADING

document.querySelectorAll("[wm-loader]").forEach(link =>{
    link.onclick = function(){
        $(".conteudo").hide('slide', {direction: 'down'}, 700);
        $('.loader-wrapper').slideDown('slow', ()=>{
            $('body').addClass('loading');
        });
    }
})

//SMOOTH SCROLL QUANDO CLICA NO BOTÃO CONTATO
document.querySelectorAll("[wm-smoothscroll]").forEach(smthscr =>{
    smthscr.onclick = function(){
        switch(smthscr.id){
            case 'sobreBtn':
                $('html,body').animate({
                    scrollTop: $(".sobre").offset().top
                }, 2000);
                break;
            case 'projBtn':
                $('html,body').animate({
                    scrollTop: $("#projetos").offset().top
                }, 1000);
                break;
        }
    }
})


//TIMEOUT PARA TRANSIÇÃO CARREGAR
function delay (URL) {
    setTimeout( () => { 
        window.location = URL }, 1000 );
}


//TROCAR BG COLOR QUANDO HOVER

document.querySelectorAll("[wm-proj]").forEach(proj =>{
    proj.onmouseover = function(){
        switch(proj.id){
            case 'eletric':
            $("body").stop(true).animate({
                backgroundColor: '#ffc72c',
                color: "black"
            },'slow');
            break;
        case 'projeto2':
            $("body").stop(true).animate({
                backgroundColor: "#00A7E1",
                color: "black"
            },'slow');
            break;
        }
    }
    proj.onmouseout = function(){
        $("body").stop(true).animate({
            backgroundColor: "#3c31dd",
            color: "white"
        },500);
    }
})

//PARALLAX NO CABEÇALHO
document.addEventListener("mousemove", parallax);

function parallax(event) {
    this.querySelectorAll(".mouse").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

//FUNÇÃO MOSTRAR SOBRE MIM
const sobreMimContainer = document.querySelector(".hidden");
const sobreDiv = document.querySelector(".sobreDiv");
sobreDiv.addEventListener("click", show);

function show(){
    switch (sobreMimContainer.classList.contains("hidden")) {
        case true:
                sobreMimContainer.classList.remove("hidden");
                sobreMimContainer.classList.add("show","slide-in-blurred-bottom");
                sobreDiv.classList.add("hidden");
            break;   
    }
}