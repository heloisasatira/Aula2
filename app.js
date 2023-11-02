const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

const produtos = [
  {id: 1, nome: "vestido vermelho", preco: "80", descricao: "Vestido vermelho de seda", image: ""},
  {id: 2, nome: "Óculos escuro", preco: "70", descricao: "Óculos escuro", image: ""}, 
  {id: 3, nome: "Bota de couro", preco: "100", descricao: "Bota de couro sintético", image: ""},
  {id: 4, nome: "Colar dourado", preco: "85", descricao: "Corrente dourada intercalada", image: ""},
  {id: 5, nome: "Anel", preco: "60", descricao: "Anel dourado", image: ""},
  {id: 6, nome: "Vestido verde", preco: "90", descricao: "Vestido verde escuro de cetim", image: ""},
  {id: 7, nome: "Top", preco: "70", descricao: "Top dourado", image: ""},
  {id: 8, nome: "Saia", preco: "78", descricao: "Saia preta de couro sintético", image: ""},
  {id: 9, nome: "Vestido Tubo", preco: "100", descricao: "vestido tubo preto", image: ""},
  {id: 10, nome: "Brinco", preco: "300", descricao: "Argola de prata banhada em ouro", image: ""}
]

app.get('/contatos', (req, res) => {
  res.render('contatos', { message: 'teste!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});