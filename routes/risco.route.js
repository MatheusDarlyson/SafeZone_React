const express = require('express'); // faz importação do express
const mongo = express(); // "joga" o express nesse const app
const riskRoutes = express.Router(); // cria um esquema de rotas do express

//importa o modelo de risco
let Risco = require('../model/Risco'); 

// Api para inserir riscos - metodo post
riskRoutes.route('/add').post(function (req, res) {
    let risco = new Risco(req.body); // Faz instância de um novo objeto (risco), 
    //que recebe como padrão req.body (Corpo da requisição front-end);    
    risco.save() // Salva no banco de dados
    // verificação de sucesso e/ou falha que é devolvida ao front-end :
    .then(risco => {
      res.status(200).json({'status': 'success','mssg': 'Risco adcionado com sucesso!'});
    })
    .catch(err => {
      res.status(409).send({'status': 'failure','mssg': 'Não foi possível salvar à base de dados!'});
    });
  });
  
 // Api para retonar diversos riscos - metodo get
riskRoutes.route('/').get(function (req, res) {
    Risco.find(function (err, riscos){
      if(err){ //exemplificação com if/else (mesma funcionalidade da inserção)
        res.status(400).send({'status': 'failure','mssg': 'Algo saiu errado...'});
      }
      else {
        res.status(200).json({'status': 'success','riscos': riscos}); // se sucesso, retorna lista de riscos
      }
    });
  });
  
  // Api para retornar 1 usuário em específico - metodo get
  riskRoutes.route('/risco/:id').get(function (req, res) {
    let id = req.params.id; // coleta os parâmetros de ID
    Risco.findById(id, function (err, risco){ // Faz a busca do usuário pelo ID
      if(err){
        res.status(400).send({'status': 'failure','mssg': 'Algo saiu errado'});
      }
      else {
        res.status(200).json({'status': 'success','risco': risco});
      }
    });
  });
  
  // Api para atualizar o dado - metodo put
  riskRoutes.route('/update/:id').put(function (req, res) {
      Risco.findById(req.params.id, function(err, risco) {
      if (!risco){
        res.status(400).send({'status': 'failure','mssg': 'Não foi possível encontrar o dado especificado'});
      } else {
          risco.setor = req.body.setor;
          risco.data = req.body.data;
          risco.turno = req.body.turno;  
          risco.descricao = req.body.descricao;
    
          risco.save().then(business => {
            res.status(200).json({'status': 'success','mssg': 'Atualização completa'});
        })
      }
    });
  });
  
  // Api para deletar - metodo delete
  riskRoutes.route('/delete/:id').delete(function (req, res) {
    Risco.findByIdAndRemove({_id: req.params.id}, function(err,){
      if(err){
        res.status(400).send({'status': 'failure','mssg': 'Algo de errado aconteceu...'});
      }
      else {
        res.status(200).json({'status': 'success','mssg': 'Deletado com sucesso'});
      }
    });
  });

  module.exports = riskRoutes;