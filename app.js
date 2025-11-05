const express = require('express');
const app = express();
const Produtos = require('./models/Produtos');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/cadastro', function (req, res) {
  Produtos.create({
    nome: req.body.nome,
    preco: req.body.preco,
    descricao: req.body.descricao
  }).then(function() {
    res.send('Produto cadastrado com sucesso!');
  }).catch(function(erro) {
    res.send('Erro ao cadastrar produto: ' + erro);
  });
});

app.get('/', (req, res) => {
  Produtos.findAll().then(function(produtos) {
    res.send({ produtos: produtos });
  }).catch(function(erro) {
    res.send('Erro ao listar produtos: ' + erro);
  });
})

app.patch('/atualizar/:id', (req, res) => {
  Produtos.update({
    nome: req.body.nome,
    preco: req.body.preco,
    descricao: req.body.descricao},
    {where: {id: req.params.id} }
  ).then(function() {
    res.send('Produto atualizado com sucesso!');
  }).catch(function(erro) {
    res.send('Erro ao atualizar produto: ' + erro);
  });
});  

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});