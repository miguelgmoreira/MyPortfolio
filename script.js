const parentContainer = document.querySelector('#projects')

parentContainer.addEventListener('click', event => {

  const current = event.target

  const isReadMoreBtn = current.className.includes('read-more-btn')

  if (!isReadMoreBtn) return

  const currentText = event.target.parentNode.querySelector('.conteudo-projetos-ver-mais')

  currentText.classList.toggle('conteudo-projetos-ver-mais--show')

  current.textContent = current.textContent.includes('Ver mais') ? "Ver menos" : 'Ver mais'

})

// form ajax

window.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("my-form");
  var status = document.querySelector(".status");

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


