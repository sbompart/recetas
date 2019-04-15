'use strict';
module.exports = (app) => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type, Accept");
        next();
    });
	
    //app.use('/api/recetas', require('./recetas'));
    app.use('/api/users', require('./users'));

	// application -------------------------------------------------------------
	app.get('*', (req, res) => {
        res.status(400).json({msg: 'Ruta no disponible'});
	});
};