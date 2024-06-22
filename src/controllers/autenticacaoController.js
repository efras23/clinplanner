const Usuario = require('../model/usuario');

function autenticar(req, res){
    const usuario = { 
        email: req.body.email, 
        senha: req.body.senha
}};

if(usuario !== nulo){
    req.autorizado = true;
    req.usuario = usuario;
    res.redirect('/especialidades');
}
else{
    let erro_autenticacao = true;
    res.render('index.html', {erro_autenticacao});
}


