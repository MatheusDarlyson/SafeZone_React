const express = require('express'); // faz importação do express
const mongo = express(); // "joga" o express nesse const app
const userRoutes = express.Router(); // cria um esquema de rotas do express

//importa o modelo de usuario
let Usuario = require('../model/Usuario'); 

// Api para inserir usuarios - metodo post
userRoutes.route('/add').post(function (req, res) {
    let usuario = new Usuario(req.body); // Faz instância de um novo objeto (usuario), 
    //que recebe como padrão req.body (Corpo da requisição front-end);    
    usuario.save() // Salva no banco de dados
    // verificação de sucesso e/ou falha que é devolvida ao front-end :
    .then(usuario => {
      res.status(200).json({'status': 'success','mssg': 'Usuário adcionado com sucesso!'});
    })
    .catch(err => {
      res.status(409).send({'status': 'failure','mssg': 'Não foi possível salvar à base de dados!'});
    });
  });
  
 // Api para retonar diversos usuarios - metodo get
userRoutes.route('/').get(function (req, res) {
    Usuario.find(function (err, usuarios){
      if(err){ //exemplificação com if/else (mesma funcionalidade da inserção)
        res.status(400).send({'status': 'failure','mssg': 'Algo saiu errado...'});
      }
      else {
        res.status(200).json({'status': 'success','usuarios': usuarios}); // se sucesso, retorna lista de usuarios
      }
    });
  });
  
  // Api para retornar 1 usuário em específico - metodo get
  userRoutes.route('/usuario/:id').get(function (req, res) {
    let id = req.params.id; // coleta os parâmetros de ID
    Usuario.findById(id, function (err, usuario){ // Faz a busca do usuário pelo ID
      if(err){
        res.status(400).send({'status': 'failure','mssg': 'Algo saiu errado'});
      }
      else {
        res.status(200).json({'status': 'success','usuario': usuario});
      }
    });
  });
  
  // Api para atualizar o dado - metodo put
  userRoutes.route('/update/:id').put(function (req, res) {
      Usuario.findById(req.params.id, function(err, usuario) {
      if (!usuario){
        res.status(400).send({'status': 'failure','mssg': 'Não foi possível encontrar o dado especificado'});
      } else {
          usuario.name = req.body.name;
          usuario.nome_da_empresa = req.body.nome_da_empresa;
          usuario.matricula = req.body.matricula;  
          usuario.funcao = req.body.funcao;
          usuario.email = req.body.email;
          usuario.senha = req.body.senha;
  
          usuario.save().then(business => {
            res.status(200).json({'status': 'success','mssg': 'Atualização completa'});
        })
      }
    });
  });
  
  // Api para deletar - metodo delete
  userRoutes.route('/delete/:id').delete(function (req, res) {
    Usuario.findByIdAndRemove({_id: req.params.id}, function(err,){
      if(err){
        res.status(400).send({'status': 'failure','mssg': 'Algo de errado aconteceu...'});
      }
      else {
        res.status(200).json({'status': 'success','mssg': 'Deletado com sucesso'});
      }
    });
  });

  module.exports = userRoutes;