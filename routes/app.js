const homeRouter = require('./home');
const loginRouter = require('./login');
const products = require('./products');
const qlsp = require('./qlsp');
const qluser = require('./qluser');
const info = require('./info');


function route(app) {

    app.use('/', loginRouter)

    app.use('/home', homeRouter);

    app.use('/products', products);

    app.use("/info", info);

    app.use("/qlsp", qlsp);


    app.use("/qluser", qluser);
}

module.exports = route;