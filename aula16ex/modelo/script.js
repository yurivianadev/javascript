let numerotxt = document.getElementById('inumero')
let lista = document.getElementById('ivalor')
let res = document.getElementById('res')
let valores = []

function umacem(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function estivernalista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(umacem(numerotxt.value) && !estivernalista(numerotxt.value, valores)){
        valores.push(Number(numerotxt.value))
        let item = document.createElement('option')
        item.text = `Valor ${numerotxt.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('erro')
    } 
    numerotxt.value = ''
    numerotxt.focus() 
}

function finalizar(){
    if (valores.length == 0){
        alert('Não foi adicionado nenhum valor')
    }
    else{
        let maior = valores[0]
        let menor = valores[0]
        let tot = valores.length
        soma = 0
        media = 0
        for (pos in valores){  
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            else if(valores[pos] < menor){
                menor = valores[pos]
            }
            soma += valores[pos]    
          
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Tem ${tot} valores</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor} </p>`
        res.innerHTML += `<p>A soma é ${soma}</p>`
        res.innerHTML += `<p>A media é ${media}</p>`
    }
    
}
