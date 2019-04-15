/**
 * Created by Saul Bompart on 17/02/2019.
 */

let express = require('express');
const { all, get } = require('./users.controller');
const { useToken } = require('../../utils/useToken');

let router = express.Router();

router.get('/', useToken ,all);
router.get('/:idUser', useToken ,get);

module.exports = router;