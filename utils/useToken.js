'use strict';
const useToken = (req, res, next) => {
    if(!req.headers.authorization) {
        console.error('No tiene autorización para esta operación');
        return res.status(401).json({msg: 'No tiene autorización para esta operación'})
    }
    next();
};
module.exports = { useToken };