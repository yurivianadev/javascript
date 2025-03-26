function contar(){
    var inicion = document.getElementById('iinicio')     
    var fimn = document.getElementById('ifim')
    var razao = document.getElementById('ipasso')
    var resposta = document.getElementById('res')
    
    if (inicion.value.length == 0 || fimn.value.length == 0 || razao.value.length == 0){
        resposta.innerHTML = 'Impossivel contar'
    }else{
        resposta.innerHTML = 'Contando... <br>'
        var i = Number(inicion.value)
        var f = Number(fimn.value)
        var r = Number(razao.value)
        var c = i
        if (r <= 0){
            var r = 1
            alert('Passo = 0 , vai ser considerado = 1')
        }
        if (i < f){    
            //contagem crescente
            while (c <= f){
                resposta.innerHTML += ` ${c} \u{1F449}`
                c+=r
            }
           
        }
        else if (i > f){
            //contagem regressiva
            while (c >= f){
                resposta.innerHTML += ` ${c} \u{1F449}`
                c-=r
            }
            
        }
        resposta.innerHTML += `\u{1F3C1}`
    }
}