const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")
const db = require('./src/db')

//renderizar páginas HTML com mustache-express
app.engine("html", mustacheExpress())
app.set("view engine", "html")
app.set("views", __dirname + "/src/views")

//servir arquivos estáticos (como CSS)
app.use(express.static("./src/views"))
//pegar dados de formulário
app.use(express.urlencoded({extended: true}))
//direcionar rotas para módulo adequado
app.use("/", require("./src/routes/RoutesClin"))

//fazendo sincronização do banco de dados com a aplicação
db.sync(() => console.log('Banco de dados conectado'))

const PORT = 2024
app.listen(PORT, function(req, res){
    console.log("Aplicação rodando na porta " + PORT)
})