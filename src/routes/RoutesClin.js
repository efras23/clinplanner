const express = require("express")
const router = express.Router()

//importar funções de renderização do CONTROLADOR
const controllerClin = require("../controllers/ControllerClin")

router.get("/", controllerClin.indexView)
router.get("/cadastroELogin", controllerClin.cadastroELoginView)
router.get("/especialidades", controllerClin.especialidadesView)
router.get("/perfil", controllerClin.perfilView)

module.exports = router //pra que exportar isso mesmo???