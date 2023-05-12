//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

function calcularValorTotal(n, pedidos, cupom) {
    let total = 0;
    for (let i = 0; i < n; i++) {
      //Explicação: Aplica o conceito de destructuring para atribuição do nome e valor.
      //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
      let [nome, valor] = pedidos[i].split(' ');
      valor = parseFloat(valor);
      total += valor;
    }
    
    //Aplica o cupom de desconto, se existir:
    if (cupom === "10%") {
      total *= 0.9;
    } else if (cupom === "20%") {
      total *= 0.8;
    }
    
    return total.toFixed(2);
  }
  
  //Recupera os valores de entrada, criando um array para os pedidos:
  const n = parseInt(gets());
  const pedidos = [];
  for (let i = 0; i < n; i++) {
    pedidos.push(gets());
  }
  const cupom = gets();
  
  //Calcula o valor total e imprime o resultado:
  const resposta = calcularValorTotal(n, pedidos, cupom);
  print(`Valor total: ${resposta}`);
  