const mongoose = require('mongoose'); // Faz import da ORM em questão
const Schema = mongoose.Schema; // Cria um novo esquema dentro da ORM

let Risco = new Schema({  // Criação da classe riscos e insere os atributos :
  setor: {
    type: String
  },
  data: {
    type: Date
  },
  turno: {
    type: String
  },
  descricao: {
    type: String
  },
  localizacao: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  imagem: {
    type: String,
    required: true
  }
},{
    collection: 'risco' // Transforma a função acima em uma tabela dentro do BD"
});

// riscoSchema.index({ localizacao: '2dsphere' });
module.exports = mongoose.model('Risco', Risco); // Exporta o modelo