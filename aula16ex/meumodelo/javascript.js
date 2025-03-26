let ntxt = document.getElementById('inumero')
let res = document.getElementById('res')
let lista = document.getElementById('ivalor')
let valores = []

function estivernalista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{return false}
}

function umacem(n){
    if(Number(n) >= 1 && Number(n) <= 100){return true}
    else{return false}
}

function adicionar(){
    if (ntxt.value.length == 0){
        alert('Erro adicione valores')
    }else{
        if(umacem(ntxt.value) && !estivernalista(ntxt.value, valores)){
            valores.push(Number(ntxt.value))
            alert('Valor adicionado')
            let item = document.createElement('option')
            item.text = `Valor ${ntxt.value} adicionado`
            lista.appendChild(item)
        }
        else{
            alert('Digite outro valor esse numero não pode ser adicionado')
        }
        res.innerHTML = ''
        ntxt.value = ''
        ntxt.focus()
    }
       
}

function analisar(){
    if(valores.length == 0){
        alert('Você não adicionou números')
        
    }
    else{ 
        let max = valores[0]
        let min = valores[0]
        let total = valores.length
        let s = 0
        let m = 0
        for (pos in valores){
            s += valores[pos]
            if(valores[pos] > max){
                max = valores[pos]
            }else if(valores[pos] < min){
                min = valores[pos]
            }
        }
        m = s/total

        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados ${total} números</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${max}</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${min}</p>`
        res.innerHTML += `<p>A soma dos números é ${s}</p>`
        res.innerHTML += `<p>A media dos números é ${m.toFixed(2)}</p>`
    }
    
}
