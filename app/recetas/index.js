/**
 * Created by Saul Bompart on 17/02/2019.
 */

let express = require('express');
const { all } = require('./recetas.controller');
const { useToken } = require('../../utils/useToken');

let router = express.Router();

router.get('/', useToken ,all);
/* router.post('/', controller.create);
router.get('/:idPerson', controller.get);
router.put('/:idPerson', controller.update);
router.delete('/:idPerson', controller.delete); */

module.exports = router;