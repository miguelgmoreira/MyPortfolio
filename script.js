const parentContainer = document.querySelector('#projects')

parentContainer.addEventListener('click', event => {

  const current = event.target

  const isReadMoreBtn = current.className.includes('read-more-btn')

  if (!isReadMoreBtn) return

  const currentText = event.target.parentNode.querySelector('.conteudo-projetos-ver-mais')

  currentText.classList.toggle('conteudo-projetos-ver-mais--show')

  current.textContent = current.textContent.includes('Ver Mais') ? "Ver Menos" : 'Ver Mais'

})

// scrollspy

const defaulLink = document.querySelector(".navlist a[href='#home']")
defaulLink && defaulLink.setAttribute('id', 'active')

let home = document.querySelector('#home')
let skills = document.querySelector('#skills')
let projects = document.querySelector('#projects')
let about = document.querySelector('#about')
let contact = document.querySelector('#contact')

window.addEventListener('scroll', () => {
  var windo = window.pageYOffset

  if (skills.offsetTop <= windo && projects.offsetTop > windo) {
      document.querySelector('.skills').setAttribute('id', 'active')
      document.querySelector('.about').removeAttribute('id', 'active')
      document.querySelector('.projects').removeAttribute('id', 'active')
      document.querySelector('.contact').removeAttribute('id', 'active')
      document.querySelector('.home').removeAttribute('id', 'active')
  }
  else if (projects.offsetTop <= windo && about.offsetTop > windo) {
      document.querySelector('.projects').setAttribute('id', 'active')
      document.querySelector('.skills').removeAttribute('id', 'active')
      document.querySelector('.about').removeAttribute('id', 'active')
      document.querySelector('.contact').removeAttribute('id', 'active')
      document.querySelector('.home').removeAttribute('id', 'active')
  }
  else if (about.offsetTop <= windo && contact.offsetTop > windo) {
      document.querySelector('.about').setAttribute('id', 'active')
      document.querySelector('.skills').removeAttribute('id', 'active')
      document.querySelector('.projects').removeAttribute('id', 'active')
      document.querySelector('.contact').removeAttribute('id', 'active')
      document.querySelector('.home').removeAttribute('id', 'active')
  }
  else if (contact.offsetTop <= windo) {
      document.querySelector('.contact').setAttribute('id', 'active')
      document.querySelector('.skills').removeAttribute('id', 'active')
      document.querySelector('.projects').removeAttribute('id', 'active')
      document.querySelector('.about').removeAttribute('id', 'active')
      document.querySelector('.home').removeAttribute('id', 'active')
  }
  else {
      document.querySelector('.home').setAttribute('id', 'active')
      document.querySelector('.skills').removeAttribute('id', 'active')
      document.querySelector('.projects').removeAttribute('id', 'active')
      document.querySelector('.contact').removeAttribute('id', 'active')
      document.querySelector('.about').removeAttribute('id', 'active')
  }
})


// form ajax

window.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("my-form");
  var status = document.getElementById("status");

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
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

// menu toggle

let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navlist.classList.toggle('open')
}

window.onscroll = () => {
  menu.classList.remove('bx-x')
  navlist.classList.remove('open')
}