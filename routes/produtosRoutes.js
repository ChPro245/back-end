const express = require('express');
const controller = require('../controllers/produtosController');
const autenticar = require('../middlewares/autenticar');
const { somenteAdmin } = require('../middlewares/somenteAdmin');

const router = express.Router();

router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.post('/', autenticar, somenteAdmin, controller.criar);
router.put('/:id', autenticar, somenteAdmin, controller.atualizar);
router.delete('/:id', autenticar, somenteAdmin, controller.remover);

module.exports = router;