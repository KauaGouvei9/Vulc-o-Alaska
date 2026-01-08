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