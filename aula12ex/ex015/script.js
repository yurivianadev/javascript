function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('resposta')
    var sexo = document.getElementsByTagName('radsex')
    if (fano.value.length < 4 || fano.value > ano){
        alert('Erro. Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '' 
        img = document.getElementById('foto')
        
        
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 11){
                img.setAttribute('src', 'imagens/criancam.png')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/adolescentem.png')
            }else if (idade < 60){
                img.setAttribute('src', 'imagens/adultom.png')
            }else {
                img.setAttribute('src', 'imagens/idosom.png')
            }
            resposta.innerHTML= `Detectamos um ${genero} com ${idade} anos`

        }
        else if (fsex[1].checked){
            genero= 'Mulher'
            if (idade >= 0 && idade < 11){
                img.setAttribute('src', 'imagens/criancaf.png')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/adolescentef.png')
            }else if (idade < 60){
                img.setAttribute('src', 'imagens/adultof.png')
            }else {
                img.setAttribute('src', 'imagens/idosaf.png')
            }
            resposta.innerHTML= `Detectamos uma ${genero} com ${idade} anos`

        }
        res.appendChild(img)
    }
}