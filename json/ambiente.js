const objt = [
    {
        "nome": "Yuri",
        "idade": 20,
        "esta_trabalhando": true,
        "detalhe-prof":{"profissao":"programador",
        "empresa":"Empresa-X"},
        "hobbies": ["Ler", "Correr"]
    },
    {
        "nome": "Gabriel",
        "idade": 21,
        "esta_trabalhando": false,
        "detalhe-prof":{"profissao": null,
        "empresa": null},
        "hobbies": ["Ler", "Correr"] 
    }
]

//console.log(objt)
//JSON
//Converter para JSON

const jsondata = JSON.stringify(objt)

console.log(jsondata)
console.log(typeof jsondata)

// converter json para objeto

const objdata = JSON.parse(jsondata);

console.log(objdata)
console.log(typeof objdata)

objdata.map((pessoa)=>{
    console.log(pessoa.nome)
})
