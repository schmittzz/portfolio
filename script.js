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
        $('body').removeClass('loading');
    }
})

//SMOOTH SCROLL QUANDO CLICA NO BOTÃO CONTATO
document.querySelectorAll("[wm-smoothscroll]").forEach(smthscr =>{
    smthscr.onclick = function(){
        if(smthscr.id == "sobreBtn"){
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".sobre").offset().top
            }, 1500);
        } else if(smthscr.id == "contatoBtn"){
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#projetos").offset().top
            }, 1500);
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
        if(proj.id == "eletric"){
            $("body").stop(true).animate({
                backgroundColor: '#ffc72c',
                color: "black"
            },'slow');
        } else if(proj.id == "projeto2"){
            $("body").stop(true).animate({
                backgroundColor: "#00A7E1",
                color: "black"
            },'slow');
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
const hidden = document.querySelector(".hidden");
const sobreDiv = document.querySelector(".sobreDiv");
sobreDiv.addEventListener("click", show);

function show(){
    switch (hidden.classList.contains("hidden")) {
        case true:
                hidden.classList.remove("slide-out-blurred-right","hidden");
                hidden.classList.add("show","focus-in-expand");
            break;
        case false:
            hidden.classList.remove("focus-in-expand","show");
            hidden.classList.add("slide-out-blurred-right");
            setTimeout(() => {
                hidden.classList.add("hidden");
              }, "700");
        break;
    }
}