const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")

//renderizar páginas HTML com mustache-express
app.engine("html", mustacheExpress())
app.set("view engine", "html")
app.set("views", __dirname + "/src/views")

//servir arquivos estáticos (como CSS)
app.use(express.static("./src/views"))
//pegar dados de formulário
app.use(express.urlencoded({extended: true}))
//direcionar rotas para módulo adequado
//app.use("/", require("./src/routes/RoutesClin"))

app.get("/", function(req, res){
    res.render("index.html")
})

const PORT = 2024
app.listen(PORT, function(req, res){
    console.log("Aplicação rodando na porta " + PORT)
})