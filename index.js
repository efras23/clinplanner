const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const db = require('./src/db');
const session = require('express-session')

// renderizar páginas HTML com mustache-express
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/src/views");

// servir arquivos estáticos (como CSS)
app.use(express.static("./src/views"));
// pegar dados de formulário
app.use(express.urlencoded({ extended: true }));
// direcionar rotas para módulo adequado
app.use("/", require("./src/routes/RoutesClin"));
app.use(express.json());

app.use(session({
  secret: 'secret-token',
  name: 'sessionId',  
  resave: false,
  saveUninitialized: false
}))

// fazendo sincronização do banco de dados com a aplicação
db.sync()
  .then(() => console.log('Banco de dados conectado e sincronizado'))
  .catch((error) => console.error('Erro ao conectar ao banco de dados:', error));

const PORT = 2024;
app.listen(PORT, function() {
    console.log("Aplicação rodando na porta " + PORT);
});
