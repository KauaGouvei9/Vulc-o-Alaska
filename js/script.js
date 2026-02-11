/* Estudo sobre JavaScript*/


//console.log(document.getElementById('noticia').id)
//let busca = document.getElementById('titulo');
//console.table(busca);

// let e = document.getElementById('titulo');
// //console.log(e.classList);
// console.log(e.innerHTML);
// console.log(e.innerText);

// ------------------------------------------------------/

// let e = document.getElementsByClassName("outra-noticia");
// console.log(e);
// e[2].innerText = "Nova Notícia";


// let e = document.getElementsByName("text_usuario");
// e[0].value = "Joao"


// let e = document.getElementsByTagName("div");
// console.log(e);
//----------------------------------------------------------/

// let e = document.querySelector(".cor-texto-noticia");
// console.log(e);

// let a = document.querySelectorAll('p');
// console.log(a);
//-----------------------------------------------------------/

// EXEMPLOS DE SELETORES E RESULTADOS

// let el = null;

// //universal selector - *
// // -----------------------
// // buscar o 1º elemento do documento
// el = document.querySelector('*')

// // buscar todos os elementos do documento
// el = querySelectorAll('*')


// // type selector - p / div / h1/...
// //------------------------------------
// //buscar o primeiro paragrafo do documento
// el = document.querySelector('p')

// //buscar todos os paragrafos do documento
// el = document.querySelectorAll('p')

// //class selector
// //--------------------
// //buscar o 1º elemento que contem a classe "texto" no atributo class
// el.document.querySelector('.texto')

// //buscar todos os elementos  que contem a classe "texto" no class
// el.document.querySelectorAll('.texto')


// // id selector - #
// //----------------------------------
// //buscar elemento que tem id indicado
// el = document.querySelector('#texto')

// //uma vez que o id é unico, nao faz sentido usar o querySelectorAll()

// //attribute selector - [attribute]
// //-----------------------------------

// //todos os elementos que contem atributo NAME
// el = document.querySelectorAll('[name]')

// //todos os elementos paragrafos que contem atributo NAME 
// el = document.querySelectorAll('p[name]')

// //todos os elementos que contem atributo NAME e cujo o value seja TEXTO
// el = document.querySelectorAll('[name="texto"]')

// //todos os elementos que contem atributo class e cujo o value tem
// //varias palavras separadas por espaço e uma delas é "letra"
// el = document.querySelectorAll('[class~="letra"]') // class="texto letra cor"


// //todos os elementos que contem atributo class e cujo o value começa
// //por uma determinada palavra
// el = document.querySelectorAll('[class^="color"]') // basta ter o color no inico que capturamos o elemento

// //todos os elementos que contem atributo class e cujo o value que termina
// //por uma expressão "size"
// el = document.querySelectorAll('[class$="size"]') // basta ter o size no final que capturamos o elemento

// // todos os elementos cujo atributo class tem a palavra TEXT pelo menos uma vez
// el = document.querySelectorAll('[class*="text"]') //class="texto" ele ainda vai buscar o elemento

// // podemos agrupar seletores - busca div, p e h1
// el = document.querySelectorAll('div, p, h1')

// //ou buscar os descendentes
// el = document.querySelectorAll("div ul li")

// // descentes diretos 
// el = document.querySelectorAll("div > h3")

// //entre varios outros

// //resumo: todos os seletores sao validos no css 
// // querySelector() ou queryselectorAll()


//------------------------------------------------------------------------------------------------------------
// MANIPULAR CSS ATRAVÉS DE className e classList

//let container = document.querySelector('section')

// // ver o valor de class no console
// console.log(container.className)

// // alterar o valor de class
// container.className = "container"
// console.log(container.className)

// // adicionar mais uma classe
// container.className += " container-light"

// // Não é muito prático. Vamos ver classList
// console.log(container.classList)

// // -----------------------------------
// // ADICIONAR
// // -----------------------------------
// // adicionar classes
// container.classList.add('container-light')

// // adicionar multiplas classes
// container.classList.add('outra-class1', 'outra-class2')

// // -----------------------------------
// // REMOVER
// // -----------------------------------
// container.classList.remove('classe-a')
// //ou multiplas classes
// container.classList.remove('classe-a', 'classe-b')

// // -----------------------------------
// // ALTERNAR CLASSES
// // -----------------------------------
// container.classList.toggle('container')

// // -----------------------------------
// // verificar se uma classe existe no elemento
// // -----------------------------------
// if(container.classList.contains('container')){
//     console.log('A classe container existe.')
// } else {
//     console.log('A classe container não existe.')
// }

//------------------------------------------------------------------------------------------------------------
// MANIPULAR ATRIBUTOS DE ELEMENTOS HTML

//let img = document.querySelector('img')
//let link = document.querySelector('a')

// -------------------------------
// VER ATRIBUTO DE ELEMENTO
// -------------------------------
// console.log(img.getAttribute('src'))
// console.log(link.getAttribute('href'))

// -------------------------------
// DEFINIR OU ALTERAR ATRIBUTO DE ELEMENTO
// -------------------------------

// img.setAttribute('src', 'images/image_2.jpg')
// link.setAttribute('href', 'https://www.spacex.com/')
// link.setAttribute('target', '_blank')
// link.setAttribute('title', 'SpaceX')

// -------------------------------
// REMOVER ATRIBUTO DE ELEMENTO
// -------------------------------

// link.removeAttribute('href')
// link.removeAttribute('title')


//------------------------------------------------------------------------------------------------------------
// CRIAR, ADICIONAR E REMOVER ELEMENTOS HTML
// -------------------------------


// -----------------------------------------
// podemos criar elementos com o método document.createElement()
// nota: estes elementos não são automaticamente adicionados ao DOM
// -----------------------------------------

// // --------------------
// let novo_elemento = document.createElement('p')
// novo_elemento.innerText = 'Texto do parágrafo'

// // adicionar ao body
// document.body.appendChild(novo_elemento)

// // --------------------
// // adicionar conteúdo de texto sem tag
// var conteudo_de_texto = document.createTextNode("Este é um conteúdo de texto sem tag");
// document.body.appendChild(conteudo_de_texto)

// // --------------------
// // adicionar o parágrafo a um dos divs
// let div = document.querySelector('#elemento_1')
// div.appendChild(novo_elemento)

// // --------------------
// // criar um novo div e adicionar o novo parágrafo
// let novo_div = document.createElement('div')
// novo_div.classList.add('elemento')
// novo_div.setAttribute('id', 'elemento_4')

// let titulo = document.createElement('h1')
// titulo.textContent = 'Título do elemento 4'
// novo_div.appendChild(titulo)
// document.body.appendChild(novo_div)


//------------------------------------------------------------------------------------------------------------
// MANIPULAR EVENTOS


// function alterar_texto(){
//     document.querySelector('h1').textContent = "Novo texto"
// }


// // não dá para adicionar mais do que um event handler a cada evento
// let botao = document.querySelector('#botao')
// botao.onclick = funcao1
// botao.onclick = funcao2

// function funcao1(){
//     console.log('clique')
// }

// function funcao2(){
//     document.querySelector('h1').textContent = "Novo texto1"
// }

// // para adicionar mais do que um event handler a cada evento usamos o addEventListener
// let botao = document.querySelector('#botao')
// botao.addEventListener('click', funcao1)
// botao.addEventListener('click', funcao2)

// function funcao1(){
//     console.log('clique')
// }            

// function funcao2(){
//     document.querySelector('h1').textContent = "Novo texto1"
// }            

// // exemplo com mouseover e mouseout      

// let botao = document.querySelector('#botao')
// botao.addEventListener('mouseover', funcao1)
// botao.addEventListener('mouseout', funcao2) 

// function alterar texto

// function alterar_texto(){
//     document.querySelector('h1').textContent = "Novo texto"
// }


// // não dá para adicionar mais do que um event handler a cada evento
// let botao = document.querySelector('#botao')
// botao.onclick = funcao1
// botao.onclick = funcao2

// function funcao1(){
//     console.log('clique')
// }

// function funcao2(){
//     document.querySelector('h1').textContent = "Novo texto1"
// }

// let botao = document.querySelector('button')

// // podemos adicionar multiplos event listeners ao mesmo evento de um elemento

// botao.addEventListener('click', function(){
//     document.querySelector('h1').textContent = "Texto alterado"
// })

// botao.addEventListener('click', function(){
//     console.log('clique')
// })


// DEFINIR UM EVENT LISTENER

// -------------------------------------------------------
// function evento(){
//     document.querySelector("h1").textContent = "Novo texto"
// }

// let botao = document.querySelector("button")
// botao.addEventListener('click', evento)

// -------------------------------------------------------
// let botao = document.querySelector("button")
// botao.addEventListener('click', function() {
//     console.log('clique')
// })

// -------------------------------------------------------
// let botao = document.querySelector("button")
// botao.addEventListener('click', () => console.log('clique'))

// -------------------------------------------------------
// document.querySelector("button").addEventListener('click', (e) => {
//     console.log('clique')
//     e.target.textContent = "Alterado"
//     document.querySelector("h1").textContent = "Texto alterado"
// })


//------------------------------------------------------------------------------------------------------------
/* Apresentação de 25 caixas de formulario numa stack vertical, com variação do valor
    RGB de 10 pontos */

document.querySelectorAll("#bnt-vermelho").addEventListener('click', () => {
    for(let i = 0; i < 250; i+= 10){
        let tmp = document.createElement('div');
        tmp.classList.add('caixa');
        tmp.style.backgroundColor = `rgb(${i},0,0)`;
        document.body.appendChild(tmp);
    }
})

document.querySelectorAll("#bnt-verde").addEventListener('click', () => {
    for(let i = 0; i < 250; i+= 10){
        let tmp = document.createElement('div');
        tmp.classList.add('caixa');
        tmp.style.backgroundColor = `rgb(0,${i},0)`;
        document.body.appendChild(tmp);
    }
})


document.querySelectorAll("#bnt-azul").addEventListener('click', () => {
    for(let i = 0; i < 250; i+= 10){
        let tmp = document.createElement('div');
        tmp.classList.add('caixa');
        tmp.style.backgroundColor = `rgb(0,0,${i})`;
        document.body.appendChild(tmp);
    }
})

function delete_elements(){
    let elements = document.querySelectorAll('.caixa');
    elements.forEach(e => e.remove());
}