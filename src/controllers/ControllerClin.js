function indexView(req, res){
    res.render("index.html")
}

function cadastroELoginView(req, res){
    res.render("cadastroELogin.html")
}

function especialidadesView(req, res){
    res.render("especialidades.html")
}

function perfilView(req, res){
    res.render("perfil.html")
}

module.exports = {
    indexView,
    cadastroELoginView,
    especialidadesView,
    perfilView
}