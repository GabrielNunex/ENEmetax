const btnadd = document.querySelector('.checklist-add');
const formadd = document.querySelector('.checklist-demandas_modelo0'); 
const textadd = document.querySelector('#checkDemanda');
const confirmadd = document.querySelector('.checklist-demandas_confirmar');
const canceladd = document.querySelector('.checklist-demandas_fechar');
const ulcheck = document.querySelector('.checklist-demandas');
const btnremove = document.querySelector('.checklist-demandas_inseridadeleta')

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
let tarefaSelecionada = null

function atualizarTarefas () {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

/* Criar html da demanda */

function criarDemanda(tarefa) {
    const li = document.createElement('li')
    li.classList.add('checklist-demandas_inserida')

    const div = document.createElement('div')
    div.classList.add('checkboxTexto')

    const svg1 = document.createElement('svg')
    svg1.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="checklist-demandas_inseridabox" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>
    `

    const texto = document.createElement('p')
    texto.classList.add('checklist-demandas_texto')
    texto.textContent = tarefa.descricao

    const svg2 = document.createElement('svg')
    svg2.innerHTML = `
    <svg class="checklist-demandas_inseridadeleta" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
    `

    div.append(svg1)
    div.append(texto)

    li.append(div)
    li.append(svg2)

    /* Interações ao clicar demandas */

    svg1.onclick = () => {

        if (tarefaSelecionada == tarefa) {
            svg1.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="checklist-demandas_inseridabox" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>
            `

            texto.classList.remove('checklist-demandas_texto-ativo')

            svg2.innerHTML = `
             <svg class="checklist-demandas_inseridadeleta" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            `

            tarefaSelecionada = null;
            tarefaCompleta = true;
            return
        }

        tarefaSelecionada = tarefa;

        svg1.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="checklist-demandas_box checklist-demandas-ativo" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.29 13.29c-.39.39-1.02.39-1.41 0L5.71 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.58 7.59z"/></svg>
        `

        texto.classList.add('checklist-demandas_texto-ativo')

        svg2.innerHTML = `
    <svg class="checklist-demandas_inseridadeleta checklist-demandas-ativo" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        `
    }

    svg2.onclick = () => {
        tarefaSelecionada.completa = true
        if (tarefaSelecionada == tarefa) {

            li.remove()
            tarefas = tarefas.filter(tarefa => !tarefa.completa)
            atualizarTarefas()
        }
    }

    return li
}

/* Oculta aba de preenchimento de demanda */
btnadd.addEventListener('click', () => {
    formadd.classList.toggle('hidden')
    btnadd.classList.add('hidden')
})

canceladd.addEventListener('click', () => {
    textadd.value = '';
    formadd.classList.toggle('hidden')
    btnadd.classList.remove('hidden')
})

/* Armazena demanda escrita */
confirmadd.addEventListener('click', () => {
    const tarefa = {
        descricao: textadd.value
    }
    tarefas.push(tarefa)
    const elementotarefa = criarDemanda(tarefa)
    atualizarTarefas()
    ulcheck.append(elementotarefa);
    textadd.value = '';
    formadd.classList.add('hidden');
    btnadd.classList.remove('hidden')
})

/*  Printar demanda */

tarefas.forEach(tarefa => {
    const elementotarefa = criarDemanda(tarefa);
    ulcheck.append(elementotarefa);
});