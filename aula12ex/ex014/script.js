function carregar(){
    var boa = window.document.getElementById('boa')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //bom dia
        boa.innerHTML = 'Bom dia!'
        img.src = 'imagens/dia.png'
        document.body.style.background= '#f8c46c'
    }else if (hora < 18){
        //boa tarde
        boa.innerHTML = 'Boa tarde!'
        img.src= 'imagens/tarde.png'
        document.body.style.background='#d47c0c'
    }else{
        //boa noite
        boa.innerHTML = 'Boa noite!'
        img.src = 'imagens/noite.png'
        document.body.style.background='#885269'
    }
}