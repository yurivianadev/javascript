//conectar ao banco de dados usando sequelize

// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('teste', 'root', '91313826', {
//     host: "localhost",
//     dialect: 'mysql'
// })

// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso!")
// }).catch(function(erro){
//     console.log("Falha ao se conectar:" + erro)
// })


//Criar model - referencia da minha tabela dentro do sequelize

const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', '91313826', {
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo : {
        type: Sequelize.STRING  
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true}) //sincroniza meu model com o mysql
// Postagem.create({
//     titulo : "Aprendendo Banco de dados",
//     conteudo : "Estou aprendendo a inserir conteudo em meu objeto"

// })

const Usuario = sequelize.define('usuarios', {
    nome : {
        type : Sequelize.STRING
    },
    sobrenome : {
        type: Sequelize.STRING
    },
    idade : {
        type: Sequelize.INTEGER
    },
    email : {
        type : Sequelize.STRING
    }

})

//Usuario.sync({force:true})
// Usuario.create({
//     nome : "Yuri",
//     sobrenome : "Ferreira",
//     idade : 20,
//     email : "yuriferreira@gmail.com"
// })