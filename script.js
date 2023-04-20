const parentContainer = document.querySelector('#projetos')

parentContainer.addEventListener('click', event => {

  const current = event.target

  const isReadMoreBtn = current.className.includes('read-more-btn')

  if (!isReadMoreBtn) return

  const currentText = event.target.parentNode.querySelector('.box-projetos-read-more')

  currentText.classList.toggle('box-projetos-read-more--show')

  current.textContent = current.textContent.includes('Ver Mais') ? "Ver Menos" : 'Ver Mais'

})

// scrollspy

const defaulLink = document.querySelector(".navbar a[href='#home']")
defaulLink && defaulLink.setAttribute('id', 'active')

let home = document.querySelector('#home')
let habilidades = document.querySelector('#habilidades')
let projetos = document.querySelector('#projetos')
let sobre = document.querySelector('#sobre')
let contato = document.querySelector('#contato')

window.addEventListener('scroll', () => {
  var windo = window.pageYOffset

  if (habilidades.offsetTop <= windo && projetos.offsetTop > windo) {
      console.log(habilidades)
      document.querySelector('.habilidades').setAttribute('id', 'active')
      document.querySelector('.sobre').removeAttribute('id', 'active')
      document.querySelector('.projetos').removeAttribute('id', 'active')
      document.querySelector('.contato').removeAttribute('id', 'active')
      document.querySelector('.home').removeAttribute('id', 'active')
  }
  else if (projetos.offsetTop <= windo && sobre.offsetTop > windo) {
      console.log(sobre)
      document.querySelector('.projetos').setAttribute('id', 'active')
      document.querySelector('.habilidades').removeAttribute('id', 'active')
      document.querySelector('.sobre').removeAttribute('id', 'active')
      document.querySelector('.contato').removeAttribute('id', 'active')
      document.querySelector('.home').removeAttribute('id', 'active')
  }
  else if (sobre.offsetTop <= windo && contato.offsetTop > windo) {
      console.log(projetos)
      document.querySelector('.sobre').setAttribute('id', 'active')
      document.querySelector('.habilidades').removeAttribute('id', 'active')
      document.querySelector('.projetos').removeAttribute('id', 'active')
      document.querySelector('.contato').removeAttribute('id', 'active')
      document.querySelector('.home').removeAttribute('id', 'active')
  }
  else if (contato.offsetTop <= windo) {
      console.log(contato)
      document.querySelector('.contato').setAttribute('id', 'active')
      document.querySelector('.habilidades').removeAttribute('id', 'active')
      document.querySelector('.projetos').removeAttribute('id', 'active')
      document.querySelector('.sobre').removeAttribute('id', 'active')
      document.querySelector('.home').removeAttribute('id', 'active')
  }
  else {
      console.log(home)
      document.querySelector('.home').setAttribute('id', 'active')
      document.querySelector('.habilidades').removeAttribute('id', 'active')
      document.querySelector('.projetos').removeAttribute('id', 'active')
      document.querySelector('.contato').removeAttribute('id', 'active')
      document.querySelector('.sobre').removeAttribute('id', 'active')
  }
})


// form ajax

window.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("my-form");
  var status = document.getElementById("status");

  function success() {
    form.reset();
    status.classList.add("sucesso");
    status.innerHTML = "Enviado!";
  }

  function error() {
    status.classList.add("erro");
    status.innerHTML = "Oops! Ocorreu um erro.";
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
