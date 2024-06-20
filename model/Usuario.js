const mongoose = require('mongoose'); // Faz import da ORM em questão
const Schema = mongoose.Schema; // Cria um novo esquema dentro da ORM

let Usuario = new Schema({  // Criação da classe usuário e insere os atributos :
  nome: {
    type: String
  },
  nome_da_empresa: {
    type: String
  },
  matricula: {
    type: String
  },
  funcao: {
    type: String
  },
  email: {
    type: String
  },
  senha: {
    type: String
  },
},{
    collection: 'usuario' // Transforma a função acima em uma tabela dentro do BD"
});
module.exports = mongoose.model('Usuario', Usuario); // Exporta o modelo