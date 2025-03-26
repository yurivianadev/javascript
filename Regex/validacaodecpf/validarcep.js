let cpf = document.getElementById('icpf')
let res = document.getElementById('res')
//g global /i case sensitive /m multiline

function iscepvalido(str){
    var regex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
    return regex.test(str);
}

function isemail(str){
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(str);
}

function enviar(){    
    res.innerHTML=''
    if(iscepvalido(cpf.value)==false && isemail(cpf.value)==false){
        alert('ERRO. CPF INVALIDO ou Email invalido')
        
    }else{
        res.innerHTML = `O CPF ou Email é valido`
    }
    
}

//let cpf = '143.455578-31'
//function iscepvalido(str){
//    var regex = /\b\d{3}.\d{3}.\d{3}-\d{2}\b/g;
//    return regex.test(str);
//}
//console.log(iscepvalido(cpf))