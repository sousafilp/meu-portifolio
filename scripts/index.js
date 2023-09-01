const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

function typeWriter(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(function() {
      elemento.innerHTML += letra
    }, 75 * i)
  });
}

// Animar itens da tela que estiverem com o atributo data-anime

const item = document.querySelectorAll("[data-anime]")

const animeScroll = () => {
  const windowTop = window.scrollY + window.innerHeight * 0.85
  item.forEach(element => {
    if(windowTop > element.offsetTop){
      element.classList.add('animate');
    }else{
      element.classList.remove("animate");
    }
  });
};

animeScroll()

window.addEventListener("scroll", ()=> {
  animeScroll();
})


const titulo = document.querySelector(".escrito")
typeWriter(titulo)

const titulo2 = document.querySelector(".escrito2")
typeWriter(titulo2)
