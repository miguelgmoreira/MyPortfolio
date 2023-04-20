const parentContainer = document.querySelector('.projetos')

parentContainer.addEventListener('click', event => {

    const current = event.target

    const isReadMoreBtn = current.className.includes('read-more-btn')

    if(!isReadMoreBtn) return

    const currentText = event.target.parentNode.querySelector('.box-projetos-read-more')

    currentText.classList.toggle('box-projetos-read-more--show')

    current.textContent = current.textContent.includes('Ver Mais') ? "Ver Menos" : 'Ver Mais'

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
  