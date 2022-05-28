///////////////////////////////////////
// Exercicios praticos
///////////////////////////////////////

const partida = {
  time1: 'Time A',
  time2: 'Time B',
  jogadores: [
    ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11'],
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11'],
  ],
  gols: '4:0',
  goleadores: ['A7', 'B11', 'B7', 'B9'],
  date: 'May 28th, 2022',
  chances: {
    time1: 2,
    x: 3,
    time2: 5,
  },
};

// 1. Aqui fazemos um split do "jogadores" (um array com 2 elementos, e cada elemento tendo varios valores)
//Essa ferramenta eh bem poderosa
const [jogadores1, jogadores2] = partida.jogadores;
console.log(jogadores1, jogadores2);

// 2. Separar o goleiro dos jogadores. Aqui utilizaremos o "rest sintax"
const [goleiro, ...fieldjogadores] = jogadores1;
console.log(goleiro, fieldjogadores);

// 3. Agora, iremos unir num unico array o nome de todos os jogadores.
const TodosJogadores = [...jogadores1, ...jogadores2];
console.log(TodosJogadores);

// 4. Vamos adicionar novos jogadores ao conjunto de ja existente
const jogadores1Final = [...jogadores1, 'C1', 'C2', 'C3'];

// 5. Baseado na estrutura do objeto partida, iremos criar 3 novas
//variaveis. Observe que tanto 'time1' quanto 'time2' ja sao os
//nomes das propriedades dentro do "partida.odds". La dentro, temos
//tambem o x. Mas nao queremos que nossa variavel se chame x.
//No caso abaixo, trocamos por draw.
const {
  chances: { time1, x: empate, time2 },
} = partida;
console.log(time1, empate, time2);

// 6. Vamos contar quantos gols foram feitos. A funcao abaixo
//nos dira.
const imprimeMensagem = function (...jogadores) {
  console.log(jogadores);
  console.log(`${jogadores.length} gols foram marcados`);
};

// imprimeMensagem('B2', 'B11', 'A11', 'A4');

//Se eliminarmos o operador rest, a funcao imprimira somente
//"1 gol" pois a fx somente enxerga 1 elemento.
//Teste e veja! Se queremos passar valor por valor do array, entao
//devemos usar o ...
imprimeMensagem(...partida.goleadores);

// 7. Imprimir uma mensagem de acordo com a possibilidade do time
// vencer. Este numero se encontra dentro de "chances". No item 5 //ja passamos os valores para 3 variaveis. Entao as
//reutilizaremos:
time1 < time2 && console.log('Time 2 tem maior probabilidade de vencer');
time1 > time2 && console.log('Time 1 tem maior probabilidade de vencer');
