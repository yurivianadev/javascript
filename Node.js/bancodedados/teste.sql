--Criar tabela usuario
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);  

 --Inserir usuario 
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Lucas Pereira",
    "lucaspereira@gmail.com",
    20
);

--Adquirir dados
SELECT * FROM usuarios --pega todos os usuarios da lista
SELECT * FROM usuarios WHERE idade = 20; --listar usuarios

--deletar registros
DELETE FROM usuarios --toda tabela excluida nunca deve ser usada
DELETE FROM usuarios WHERE nome = "Lucas Pereira";

--editar registros
UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Luiza Fernandes";
