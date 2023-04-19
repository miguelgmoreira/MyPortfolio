const parentContainer = document.querySelector('.projetos')

parentContainer.addEventListener('click', event => {

    const current = event.target

    const isReadMoreBtn = current.className.includes('read-more-btn')

    if(!isReadMoreBtn) return

    const currentText = event.target.parentNode.querySelector('.box-projetos-read-more')

    currentText.classList.toggle('box-projetos-read-more--show')

    current.textContent = current.textContent.includes('Ver Mais') ? "Ver Menos" : 'Ver Mais'

})