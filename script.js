var num = document.getElementById('num')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []
var somap = document.querySelector('.soma')
var mediap = document.querySelector('.media')
var menorp = document.querySelector('.menor')
var maiorp = document.querySelector('.maior')
var lentip = document.querySelector('.lenti')



function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { // se o numero for maior ou igual à um e for menor que 100 retorne "true"
        return true
    } else {
        return false
    }
}


function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // index of esta servindo para identificar onde o numero está
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // se o numero for um numero e não estiver na lista(!) acontece o bloco
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)

    } else {
        window.alert('valor invalido ou ja adicionado')
    }
    num.value = ''
    num.focus() // focus serve para apagar o numero automaticamente apos a função dele for efetuada
}

function finalizar() {
    let soma = 0
    let medida = 0
    let menor = valores[0]
    let maior = valores[0]

    for (i = 0; i < valores.length; i++) {
        soma += valores[i] // o mais e igual é a mesma coisa que soma = soma = valores
        medida = soma / valores.length

                                                                                    //é possivel criar if e for na mesma function
        if (valores[i] < menor) {
            menor = valores[i] // i é o contador
        }

        if (valores[i] > maior) { 
            maior = valores[i]
        }

    }

    lentip.innerHTML = `O total de valores encontrados é ${valores.length}`
    menorp.innerHTML = `O menor valor encontrado é ${menor}`
    somap.innerHTML = `A soma de todos valores é ${soma}`
    mediap.innerHTML = `A media dos valores é ${medida}`
    maiorp.innerHTML = `O maior valor encontrado é ${maior}`
}


// res.innerText = `Somando todos valores, temos ${soma}.`





/*




function finalizar() {
    let soma = 0
    for (i = 0; i < valores.length; i++) {
        soma += valores[i]
        res.innerHTML = `A media dos valores é ${soma/valores.length}`
}
}



/*

console.log(soma/valores.length) //media







let tt = document.querySelector('#num')
tt.addEventListener("click",(event)=>{
    console.log('c')
})



function finalizar() {
var num = document.getElementById('txtnum')
var res = document.getElementById('res');
var select = document.getElementById['numadi'];
    for(let in num) {
        res.innerText = `O ultimo número adicionado foi ${num.value}`

}
    }





function finalizar() {
    var num = document.getElementById('txtnum')
    var soma = num + num
    var res = document.getElementById('res');
    var select = document.getElementById("numadi");
     if (num+num==true) {
         return `${soma}`
     } else {
         return 'deu nada'
     }
    }
}
*/
