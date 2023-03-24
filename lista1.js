function exe1(){
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let sub = (n1 - n2)
    alert ("O resultado da subtração é: " + sub)
}

function exe2(){
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let n3 = Number (document.getElementById("n3").value)
    let mult = (n1 * n2 * n3  )
    alert ("O resultado da mutiplicação é: " + mult)
}

function exe3(){
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let div = (n1 / n2  )
    alert ("O resultado da divisão é: " + div)
}

function exe4(){
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let mdp = ((n1*2 + n2* 3) /5 )
    alert ("O resultado da media é: " + mdp)
}

function exe5(){
    let p = Number (document.getElementById("p").value)
    let preco = (p * 0.9 )
    alert ("O valor é: " + preco)
}

function exe6(){
    let fixo = Number(document.getElementById("fixo").value )
    let vendas = Number(document.getElementById("vendas").value  )  
    let comissao = vendas * 4 / 100
    let total = fixo + comissao 
     alert("Comissão" + comissao + "Salario Total" + total)
}

function exe7(){
    let peso = Number (document.getElementById("p").value)
    let engordar = (p * 0.15)  
    let emagrecer =(p * 0.2 )
    alert (" Se engordar: " + engordar + "\nSe emagrecer:" + emagrecer)
}

function exe8(){
    let kg = Number (document.getElementById("kg").value)
    let g = (kg * 1000 )
    alert ("O valor do peso em gramas é: " + g +"g")
}

function exe9(){
    let a = Number (document.getElementById("a").value)
    let b1 = Number (document.getElementById("b1").value)
    let b2 = Number (document.getElementById("b2").value)
    let area = (((b1+ b2 ) * a) /2)
    alert (" A area do trazpézio é: " + area) 
}

function exe10(){
    let a = Number (document.getElementById("a").value)
    let l1 = Number (document.getElementById("l1").value)
    let l2 = Number (document.getElementById("l2").value)
    let area = (l1 * l2)
    alert ("A area do quadrado é: " + area)
}


