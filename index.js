const express = require("express")
const app = express()

const PORT = 2024

app.get("/", function(req, resp){
    resp.send("Teste.")
})

app.listen(PORT, function(req, res){
    console.log("Aplicação rodando na porta " + PORT)
})