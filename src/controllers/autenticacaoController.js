const Usuario = require('../models/usuario');

async function autenticar(req, res){
    const usuario = await Usuario.findOne({ where: {
        email: req.body.email, 
        senha: req.body.senha}
    });
    if(usuario !== null){
        req.session.autorizado = true;
        req.session.usuario = usuario;
        res.redirect('/especialidades');
    }
    else{
        res.render('index.html');
    }
}

function verificarAutenticacao(req, res, next) {
    if(req.session.autorizado){
        console.log("Usuário autorizado");
        next();
    }
    else{
        console.log("usuário não autorizado");
        res.redirect('/');
    }   
}

function sair(req, res) {
    req.session.destroy();
    res.redirect('/');
}

module.exports = {
    autenticar,
    verificarAutenticacao,
    sair
}