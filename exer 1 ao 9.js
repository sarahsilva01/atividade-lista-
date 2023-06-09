function somaVetor(){
    let precos = []
    let soma = 0
    for(let i=0;i<10;i++){
        precos[i] = Number(prompt(`Informe ${i+1}o. preço`))
    }
    for(let i=0;i<10;i++){
        soma = soma + precos[i]
    }
    alert(`A média dos preços é ${soma/10}`)
  }
  // exercício 1 -> peça ao usuário para informar 10 números
  // calcule e mostra a soma dos elementos pares
  function exemplo1(){
    let vetor = []
    let soma =0
    for(let i=0;i<10;i++){
        vetor[i] = Number(prompt(`${i+1}o. preço`))
    }
    for(let i=0;i<10;i++){
        if (vetor[i] % 2 == 0){
            soma = soma + vetor[i]
        }
    }
    alert(`A soma é ${soma}`)
  }
  // exercício 2 -> peça ao usuário para informar 10 números
  // calcule e mostra a soma dos elementos nas posições ímpares
  function exemplo2(){
    let vetor = []
    let soma = 0
    for(let i=0;i<10;i++){
        vetor[i] = Number(prompt(`${i+1}o. preço`))
    }
    for(let i=0;i<10;i++){
        if (i % 2 == 1){
            soma = soma + vetor[i]
        }
    }
    alert(`Soma ${soma}`)
  }
  
  function exe1() {
    let vetor = []
  
    // Entrada de dados
    for (let i = 0; i < 6; i++) {
      vetor[i] = Number(prompt(`Informe o ${i+1}º elemento:`))
    }
  
    // Cria os vetores pares e ímpares
    let pares = []
    let impares = []
  
    for (let i = 0; i < 6; i++) {
      if (vetor[i] % 2 === 0) {
        pares.push(vetor[i])
      } else {
        impares.push(vetor[i])
      }
    }
  
    // Exibir informações ao usuário
    alert(`Números pares: ${pares}\nQuantidade: ${pares.length}`)
    alert(`Números ímpares: ${impares}\nQuantidade: ${impares.length}`)
  }
  
  
  function exe2() {
    let vetor = []
  
    // Entrada de dados
    for (let i = 0; i < 7; i++) {
      vetor[i] = Number(prompt(`Informe o ${i+1}º elemento:`))
    }
  
    // Cria os vetores de múltiplos
    let mult2 = []
    let mult3 = []
    let mult2e3 = []
  
    for (let i = 0; i < 7; i++) {
      if (vetor[i] % 2 === 0 && vetor[i] % 3 === 0) {
        mult2e3.push(vetor[i])
        mult2.push(vetor[i])
        mult3.push(vetor[i])
      } else if (vetor[i] % 2 === 0) {
        mult2.push(vetor[i])
      } else if (vetor[i] % 3 === 0) {
        mult3.push(vetor[i])
      }
    }
  
    // Exibir informações ao usuário
    alert(`Números múltiplos de 2: ${mult2}`)
    alert(`Números múltiplos de 3: ${mult3}`)
    alert(`Números múltiplos de 2 e 3: ${mult2e3}`)
  }
  
  function exe3() {
    let codigos = []
    let estoque = []
  
    // Entrada de dados dos produtos
    for (let i = 0; i < 5; i++) {
      codigos[i] = Number(prompt(`Informe o código do produto ${i+1}:`))
      estoque[i] = Number(prompt(`Informe a quantidade em estoque do produto ${i+1}:`))
    }
  
    let cliente = Number(prompt('Informe o código do cliente (Digite 0 para encerrar):'))
  
    while (cliente !== 0) {
      let codigo = Number(prompt('Informe o código do produto para compra:'))
      let qtde = Number(prompt('Informe a quantidade para compra:'))
  
      let achou = false // Não encontrou o produto
  
      for (let i = 0; i < 5; i++) {
        if (codigo === codigos[i]) {
          achou = true // Achou o produto
  
          if (estoque[i] >= qtde) { // Tem em estoque
            estoque[i] -= qtde
            alert('Compra realizada com sucesso')
          } else {
            alert('Compra não realizada, falta do produto')
          }
        }
      }
  
      if (!achou) { // Não encontrou o produto
        alert('Produto não encontrado')
      }
  
      cliente = Number(prompt('Informe outro código do cliente (Digite 0 para encerrar):'))
    }
  
    // Exibir informações ao usuário
    alert(`Estoque atualizado: ${estoque}`)
  }
  
  function exe31(){
    let codigos = []
    let estoque = []
    for(let i = 0;i < 5; i++){
        codigos[i] = Number(prompt(`Informe código do produto ${i+1}`))
        estoque[i] = Number(prompt(`Informe qtde em estoque do produto ${i+1}`))
    }
    let cliente = Number(prompt('Informe código do cliente'))
    while (cliente != 0 ) {
        let codigo = Number(prompt(`Informe o código do produto para compra`))
        let qtde = Number(prompt(`Informe qtde para compra`))
        // vamos procurar o código do produto
        let achou = false // não encontrei o produto
        if (codigos.includes(codigo)){
                achou = true // achou
                // recupera posição do código do produto
                let posicao = codigos.indexOf(codigo)
                if (estoque[posicao] >= qtde){ // tem em estoque
                    estoque[posicao] = estoque[posicao] - qtde
                    alert('Compra realizada com sucesso')
                }
                else {
                    alert('Compra não realizada, falta do produto')
                }
        }
        // encerrou a procura
        if (!achou) { // não encontrou
            alert('Produto não encontrado')
        }
        cliente = Number(prompt('Informe outro código do cliente. Digite 0 para encerrar'))
    }
    console.log(`Estoque atualizado ${estoque}`)
  }
  
  function exe4(){
    // entrada de dados
    let vet = []
    for(let i=0;i<10;i++){
        vet[i] = Number(prompt(`Informe o ${i+1}o. elemento`))
    }
    // cria um vetor que guarda as posições do número 30
    let posicoes = []
    for(let i=0;i<10;i++){
        if (vet[i] == 30) {
            posicoes.push(i)
        }
    }
    alert(`Posições aonde o 30 aparecem ${posicoes}`)
  }
  
  function exe5(){
    let logica = []
    let linguagem = []
    let comum = []
    for(let i=0;i<10;i++){
        logica[i] = Number(prompt(`Informe o ${i}o. aluno que faz Lógica`))
    }
    for(let i=0;i<5;i++){
        linguagem[i] = Number(prompt(`Informe o ${i}o. aluno que faz Linguagem`))
    }
    // vamos verificar a intersecção
    for(let i=0;i<10;i++){
        if (linguagem.includes(logica[i])){
            comum.push(logica[i])
        }
    }
    alert(`Alunos que fazem as duas disciplinas ${comum}`)
  }
  
  function exe6() {
    let vendas = []
    let percentuais = []
    let nomes = []
    let comissoes = []
  
    for(let i = 0; i < 5; i++) {
      vendas[i] = Number(prompt(`Informe a venda do ${i+1}º vendedor:`))
      percentuais[i] = Number(prompt(`Informe o percentual do ${i+1}º vendedor:`))
      nomes[i] = prompt(`Informe o nome do ${i+1}º vendedor:`)
  
      // Calcula comissão do vendedor
      comissoes[i] = (vendas[i] / percentuais[i]) * 100
    }
  
    let total = 0
    let maior = comissoes[0]
    let menor = comissoes[0]
  
    for(let i = 0; i < 5; i++) {
      total += vendas[i]
  
      if (comissoes[i] > maior) {
        maior = comissoes[i]
      }
  
      if (comissoes[i] < menor) {
        menor = comissoes[i]
      }
    }
  
    // Exibir informações ao usuário
    alert(`Valor total vendido: ${total}`)
    alert(`Maior valor: ${maior} e quem recebe: ${nomes[comissoes.indexOf(maior)]}`)
    alert(`Menor valor: ${menor} e quem recebe: ${nomes[comissoes.indexOf(menor)]}`)
  }
  
  
  function codigoAlunoRepetido(){
    let codigos = []
    let nomes = []
    for(let i=0;i<5;i++){
        let codigo = Number(prompt('Informe um código de aluno'))
        // codigos tem todos os códigos
        // código tem o código digitado pelo usuário
        // includes verifica se código está dentro de códigos
        while (codigos.includes(codigo)) {
            codigo = Number(prompt('Código já existe, informe um novo'))
        }
        // como o código é novo, agora podemos inserir no vetor
        codigos[i] = codigo
        nomes[i] = prompt('Informe um nome de alulno')
    }
    console.log(codigos)
    alert(codigos)
    console.log(nomes)
    alert(nomes)
  }

  function exe7() 
  const vetor = [];

  for (let i = 0; i < 10; i++) {
    const numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
    vetor.push(numero);
  }
  
  let negativos = 0;
  let somaPositivos = 0;
  
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) {
      negativos++;
    } else if (vetor[i] > 0) {
      somaPositivos += vetor[i];
    }
  }
  
  console.log(`A quantidade de números negativos é: ${negativos}`);
  console.log(`A soma dos números positivos é: ${somaPositivos}`);{

  }

  function exe8(){
  }
  const alunos = [];
const medias = [];

// Preenchendo o vetor de nomes e de médias
for (let i = 0; i < 7; i++) {
  const nome = prompt(`Digite o nome do aluno ${i + 1}:`);
  const media = parseFloat(prompt(`Digite a média final do aluno ${nome}:`));

  alunos.push(nome);
  medias.push(media);
}

// Encontrando o aluno com a maior média
let indiceMaiorMedia = 0;
for (let i = 1; i < medias.length; i++) {
  if (medias[i] > medias[indiceMaiorMedia]) {
    indiceMaiorMedia = i;
  }
}

const alunoMaiorMedia = alunos[indiceMaiorMedia];
const maiorMedia = medias[indiceMaiorMedia];

console.log(`O aluno com a maior média é: ${alunoMaiorMedia}`);

// Calculando notas para aprovação no exame final
for (let i = 0; i < alunos.length; i++) {
  const mediaAluno = medias[i];

  if (mediaAluno < 7) {
    const notaExame = 10 - mediaAluno;
    console.log(`O aluno ${alunos[i]} precisa tirar ${notaExame.toFixed(2)} na prova de exame final para ser aprovado.`);
  }
}

function exe9()
const nomes = [];
const codigos = [];
const precos = [];

// Preenchendo os vetores de nomes, códigos e preços
for (let i = 0; i < 10; i++) {
  const nome = prompt(`Digite o nome do produto ${i + 1}:`);
  const codigo = parseInt(prompt(`Digite o código do produto ${nome}:`));
  const preco = parseFloat(prompt(`Digite o preço do produto ${nome}:`));

  nomes.push(nome);
  codigos.push(codigo);
  precos.push(preco);
}

console.log("Relatório de produtos com aumento:");

for (let i = 0; i < 10; i++) {
  const nome = nomes[i];
  const codigo = codigos[i];
  const preco = precos[i];

  let novoPreco = preco;

  if (codigo % 2 === 0 && preco > 1000) {
    novoPreco *= 1.2;
  } else if (codigo % 2 === 0) {
    novoPreco *= 1.15;
  } else if (preco > 1000) {
    novoPreco *= 1.1;
  }

  if (novoPreco !== preco) {
    console.log(`Nome: ${nome}`);
    console.log(`Código: ${codigo}`);
    console.log(`Preço: R$ ${preco.toFixed(2)}`);
    console.log(`Novo Preço: R$ ${novoPreco.toFixed(2)}`);
    console.log("-------------------");
  }
}
