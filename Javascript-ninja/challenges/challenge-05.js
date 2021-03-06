/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

 var arr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

 function myfunction(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
 console.log(myfunction(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myfunction2(arg, num) {
    return arg[num];
}



/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrDois = [1, "Fernando", true, undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(myfunction2(arrDois, 0));
console.log(myfunction2(arrDois, 1));
console.log(myfunction2(arrDois, 2));
console.log(myfunction2(arrDois, 3));
console.log(myfunction2(arrDois, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nameBook){
    var books = {
        'Chapeuzinho Vermelho': {
            quantidadePaginas: 10,
            autor: 'Fulano de tal',
            editora: 'Panini'
        }, 
        'Os Três Porquinhos': {
            quantidadePaginas: 20,
            autor: 'Sicreno de tal',
            editora: 'Panini'
        }, 
        'O Senhor dos Anéis': {
            quantidadePaginas: 3000,
            autor: 'J. R. R. Tolkien',
            editora: 'Harper Collins'
        }
    };
    
    
    return !nameBook ? books : books[ nameBook ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log('O livro Senhor dos Anéis tem ' + book('O Senhor dos Anéis').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro Chapeuzinho Vermelho é ' + book('Chapeuzinho Vermelho').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log('O livro Os Três Porquinhos foi publicado pela editora ' + book('Os Três Porquinhos').editora + '.');