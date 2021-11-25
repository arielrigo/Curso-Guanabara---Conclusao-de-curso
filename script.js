var num = document.getElementById('num')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = [] 
var somap = document.querySelector('.soma')
var mediap = document.querySelector('.media')


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}


function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)

    } else {
        window.alert('valor invalido ou ja adicionado')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    let soma = 0
    let medida = 0
    for (i = 0; i < valores.length; i++) {
        soma += valores[i]
        medida = soma / valores.length
    }
    
    somap.innerHTML = `A soma de todos valores é ${soma}`
    mediap.innerHTML = `A media dos valores é ${medida}`
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
