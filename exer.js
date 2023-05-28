function exe1(){
    let a, b, c, d, aux
    let cont1 = 1
    // let cont2 = 1 -> Não pode ficar aqui, pq?

    while(cont1 <= 5){
        a = Number(prompt('Informe A: '))
        b = Number(prompt('Informe B: '))
        c = Number(prompt('Informe C: '))
        d = Number(prompt('Informe D: '))

        let cont2 = 1
        // A declaração da variável tem que ser dentro do primeiro while, porque se deixar fora ele calculará errado
        // e irá estar na sequência errada
        while(cont2 <= 3){
            if(a > b){
                aux = a
                a = b
                b = aux
            }
            if(b > c){
                aux = b
                b = c
                c = aux
            }
            if(c > d){
                aux = c
                c = d
                d = aux
            }
            cont2++
        }
        alert(`Crescente: ${a}, ${b}, ${c}, ${d} \n` + `Decrescente: ${d}, ${c}, ${b}, ${a}`)
        cont1++
    }
}

function exe2(){
    let preco = 5.0
    let lucro
    let ingresso = 120

    while(preco >= 1){
        lucro = ((preco * ingresso) - 200)
        console.log('O lucro do preço de R$'+ preco + ' é de R$' + lucro)
        console.log('O preço do ingresso é de R$' + preco)
        console.log('O total de ingressos vendidos é de ' + ingresso + ' ingressos')
        console.log('\n')

        preco = preco - 0.5
        ingresso = ingresso + 26
    }
}
function exe3(){
    let cont = 0
    let qntd1 = 0
    let qntd2 = 0
    let qntd3 = 0
    let qntd4 = 0
    let qntd5 = 0
    
    while(cont < 8){
        let idade = Number(prompt('Informe a sua idade:'))
    
        if(idade <= 15){
            qntd1 = qntd1 + 1
        }
        else if(idade <= 30){
            qntd2 = qntd2 + 1
        }
        else if(idade <= 45){
            qntd3 = qntd3 + 1
        }
        else if(idade <= 60){
            qntd4 = qntd4 + 1
        }
        else{
            qntd5 = qntd5 + 1
        }
    
        cont = cont + 1
    }
    let porcPri, porcUlt
    
    porcPri = qntd1 * 12.5
    porcUlt = qntd5 * 12.5
    
    console.log('Possui ' + qntd1 + ' pessoa na faixa etária até 15 anos')
    console.log('Possui ' + qntd2 + ' pessoa na faixa etária de 16 anos até 30 anos')
    console.log('Possui ' + qntd3 + ' pessoa na faixa etária de 31 anos até 45 anos')
    console.log('Possui ' + qntd4 + ' pessoa na faixa etária de 46 anos até 60 anos')
    console.log('Possui ' + qntd5 + ' pessoa na faixa etária acima de 60 anos')
    console.log('\n')
    console.log('Na primeira faixa etária possui ' + porcPri + '% do total das pessoas')
    console.log('Na última faixa etária possui ' + porcUlt + '% do total das pessoas')
    }
    
    
    function exe4(){
        let cont = 0
        let num = Number(prompt('Informe o número para tabuada: '))
    
        while(cont <= 10){
            let resultado = cont * num
            console.log(cont + ' x ' + num + ' = ' + resultado)
            cont = cont + 1 
        }
    }
    
    function exe5(){
        let contador = 0
        let num = 1
        let cont = 0
        let soma
    
       
            while(cont < 110){
                soma = num * contador
                console.log(contador + ' x ' + num + " = " + soma)
                contador = contador + 1
                
                if(contador == 11){
                    contador = 0
                    num = num + 1
                    console.log('\n')
                    
                }
            
            cont = cont + 1
        }
        
    }

    function exe6(){
        let totalPrazo = 0
        let totalVista = 0
        let total = 0
        let codigo, valor
    
        for(let conta = 1; conta <= 10; conta++){
            codigo = prompt("Informe V(à Vista) ou P(à Prazo) como código da compra: ").toUpperCase()
            
            valor = Number(prompt("Informe o valor da compra: "))
        
            switch(codigo){
                case 'V':
                    totalVista = totalVista + valor
                break
                case 'P':
                    totalPrazo = totalPrazo + valor
                break
                default:
                    alert('Código inválido!')
                    conta--
            }
        }
        total = totalPrazo + totalVista
        alert(`Total Prazo: R$${totalPrazo}; \nTotal Vista: R$${totalVista}; \nTotal: R$${total}`)
        alert(`Valor da 1ª Prestação: R$${(totalPrazo / 3).toFixed(2)} `)
        //.toFixed(2) -> dois números depois da vírgula
    }
    
    function exe7(){
        let idade, altura, peso, qntdpessoa, media, porc
        let qntd1 = 0
        let qntd2 = 0
        let qntd3 = 0
        let aux = 0
    
        for(let cont = 1; cont <= 5; cont++){
            idade = Number(prompt('Informe a sua idade: '))
            altura = Number(prompt('Informe a sua altura: '))
            peso = Number(prompt('Informe o seu peso: '))
            
            if(idade > 50){
                 qntd1 + 1
            }
            if ((idade >= 10) && (idade <= 20)){
                aux = aux + altura
                qntd2++
            }
            if(peso < 40){
                qntd3++
            }
        }
        qntdpessoa = qntd1
        media = aux / qntd2
        porc = qntd3 * 20
    
        console.log(`A quantidade de pessoas com mais de 50 anos é ${qntdpessoa}`)
        console.log(`A média da altura de pessoas entre 10 e 20 anos é de ${media}`)
        console.log(qntd3)
        console.log(media)
        console.log(`A porcentagem de pessoas com menos de 40kg é de ${porc}% de pessoas`)
    }
    
    function exe8(){
        let idade, peso, altura, olho, cabelo, cont
        let media, porc
        let acm = 0, qntd1 = 0, qntd2 = 0, qntd3 = 0, qntd4 = 0
    
        for(cont = 1; cont <= 6; cont++){
            idade = Number(prompt("Informe a sua idade: "))
            peso = Number(prompt("Informe o seu peso: "))
            altura = Number(prompt("Informe a sua altura: "))
            olho = String (prompt("Informe a cor dos olhos, (P) - Preto, (A) - Azul, (C) - Castanho, (V) - Verde: "))
            cabelo = String (prompt("Inform a cor do cabelo, (P) - Preto, (L) - Loiro, (C) - Castanho, (R) - Ruivo: "))
    
            if((idade > 50) && (peso < 60)){
                qntd1++
            }
            if(altura < 1.50){
                acm = acm + idade
                qntd2++
            }
            if(olho == "A"){
                qntd3++
            }
            if((cabelo == "R") && (olho != "A")){
                qntd4++
            }
        }
        media = acm / qntd2
        porc = (qntd3 * 100) / 6 
    
        alert(`A quantidade de pessoas com idade superior à 50 anos e peso inferior a 60kg é de ${qntd1} pessoa(s)
    A média de idades de pessoas com altura inferior a 1,50m é de ${media} ano(s)
    A porcentagem de pessoas com olhos azuis é de ${(porc).toFixed(2)}%
    A quantidade de pessoas ruivas sem olhos azuis é de ${qntd4} pessoa(s)`)
    }
    
    function exe9(){
        let idade, peso, altura, acm1, media, qntd1, qntd2, porc
        acm1 = 0
        qntd1 = 0
        qntd2 = 0
    
        for(let cont = 1; cont <= 10; cont++){
            idade = Number(prompt('Informe a idade: '))
            peso = Number(prompt("Informe o peso em kg: "))
            altura = Number(prompt("Informe a altura em cm: "))
    
            acm1 = acm1 + idade
    
            if((peso > 90) && (altura < 1.50)){
                qntd1++
            }
            if(((idade >= 10) && (idade <= 30)) && (altura > 1.90)){
                qntd2++
            }
        }
    
        media = acm1 / 10
        porc = qntd2 / 10 * 100
        console.log(`A média é ${media}`)
        console.log(`A quantidade de pessoas é ${qntd1}`)
        console.log(`A porcentagem é ${porc}%`)
    
    }
    
    function exe10(){
        let cont, par, primo, num
        let acm = 0
        let acm1 = 0
    
        for(cont = 0; cont < 10; cont++){
            num = Number(prompt("Informe o número desejado: "))
    
            if(num % 2 == 0){
                acm = acm + num
            }
            if((num == 2) || (num = 3) || ((num % 2 != 0) && (num % 3 != 0))){
                acm1 = acm1 + num
            }
        }
    
        alert(`A soma dos números pares é de ${acm} \nA soma dos números primos é de ${acm1}`)
    
    }
    
    function exe20(){
        let escolha
        let num1, num2, num3, media
        let peso1, peso2, peso3, pesoTotal
    
        do{
            escolha = Number(prompt("Menu de Opções \n1.Média Aritmética \n2.Média Ponderada \n3.Sair"))
    
            switch(escolha){
                case 1:
                    alert("Opção 1 escolhida!")
                    num1 = Number(prompt("Informe a primeira nota: "))
                    num2 = Number(prompt("informe a segunda nota: "))
    
                    media = (num1 + num2) / 2
                    alert(`A média aritmética é ${media}`)
                break
                case 2:
                    alert("Opção 2 escolhida!")
                    num1 = Number(prompt("Informe a primeira nota: "))
                    peso1 = Number(prompt("Informe o peso da primeira nota: "))
                    num2 = Number(prompt("Informe a segunda nota: "))
                    peso2 = Number(prompt("Informe o peso da segunda nota: "))
                    num3 = Number(prompt("Informe a terceira nota: "))
                    peso3 = Number(prompt("Informe o peso da terceira nota: "))
                    pesoTotal = peso1 + peso2 + peso3
                    media =(num1 * peso1) + (num2 * peso2) + (num3 * peso3)
                    alert(`O peso das provas é ${pesoTotal} e a média ponderada é ${media/pesoTotal}`)
    
                    /*
                    Média Ponderada = Média de notas com diferentes peso
                    EX.
                    (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)
                    ---------------------------------------------------
                                    (peso1 + peso2 + peso3)
                    */
                break
                case 3:
                    alert("Programa encerrado!")
                break
                default: alert("Opção Inválida!")
            }
             
        }while(escolha != 3)
    }
    
    function exe21(){
        let a = 0
        let b = 0
        let c = 0
        let d = 0
        let e = 0
        let f = 0
        let cont = 0
        let opcao, porcNulos, porcBranco
        
        do{
            alert("Informe o candidato que deseja:\nCandidato (1) \nCandidato (2) \nCandidato (3) \nCandidato (4) \nVoto Nulo (5) \nVoto em Branco (6)")
            opcao = Number(prompt("Informe o candidato que deseja: "))
    
            if(opcao == 1){
                a++
            }
            else if(opcao == 2){
                b++
            }
            else if(opcao == 3){
                c++
            }
            else if(opcao == 4){
                d++
            }
            else if(opcao == 5){
                e++
            }
            else if(opcao == 6){
                f++
            }
            else{
                alert("Opção Inválida!")
                cont--
            }
            cont++
        }while(opcao != 0)
    
        alert(`O candidato 1 recebeu ${a} voto(s).
    O candidato 2 recebeu ${b} voto(s).
    O candidato 3 recebeu ${c} voto(s).
    O candidato 4 recebeu ${d} voto(s).`)
        alert(`O número de voto(s) nulo(s) é de ${e} e de voto(s) branco(s) é de ${f}.`)
    
        porcNulos = (e * 100) / cont
        porcBranco = (f * 100) / cont
    
        alert(`A porcentagem de votos nulos foi de ${(porcNulos).toFixed(2)}% e a de votos em branco foi de ${(porcBranco).toFixed(2)}%`)
    }
    
    function exe23(){
        let salario, novo, ferias, decimoTerceiro, meses, opcao
        do{
            opcao = Number(prompt(`Escolha uma opção: \n 1. Novo salário \n 2. Férias \n 3. Décimo terceiro \n 4. Sair`))
            switch(opcao){
                case 1: salario = Number(prompt(`Informe salário`))
                        if ((salario >=0) && (salario < 210)){
                            novo = salario + salario*15/100
                        }
                        else if ((salario >= 210) && (salario <=600)){
                                novo = salario + salario*10/100
                        }
                        else if (salario > 600){
                            novo = salario + salario*5/100
                        } 
                        else {
                            alert('Salário negativo'); break
                        }
                        alert(`Novo salário ${novo}`); break
                case 2: salario = Number(prompt(`Informe salário`))
                        ferias = salario + 1/3*salario
                        alert(`Férias ${ferias}`); break
                case 3: salario = Number(prompt(`Informe salário`))
                        meses = Number(prompt(`Informe meses`))
                        if ((meses >=1 ) && (meses <=12)){
                            decimoTerceiro = salario + salario * meses/12
                            alert(`Décimo terceiro ${decimoTerceiro}`)
                        }
                        else {
                            alert(`Nro de meses inválido`)
                        }
                        break
                case 4: alert('Encerra o programa'); break
                default: alert('Opção inválida')
            }
        }
        while (opcao != 4)
    }
