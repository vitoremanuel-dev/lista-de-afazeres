let inputBox = document.getElementById('input-box')
let containerLista = document.getElementById('container-lista')

function adicionarTarefa() {
    if (inputBox.value === '') {
        alert ('Você deve digitar uma tarefa!')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        containerLista.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = ''
    salvarDados()
}

containerLista.addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('confirmado')
        salvarDados()
    } else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        salvarDados()
    }
}, false)

function salvarDados() {
    localStorage.setItem('data', containerLista.innerHTML)
}

function mostrarTarefas() {
    containerLista.innerHTML = localStorage.getItem('data')
}
mostrarTarefas()