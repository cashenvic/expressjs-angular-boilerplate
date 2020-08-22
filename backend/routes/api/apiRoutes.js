let express = require('express');

const utilisateurRouter = require('./utilisateur/utilisateurRouter');

/**
 *Available roles 'basic-user', 'medium-user', 'advanced-user', 'admin'
 */

exports.router = (function () {
    let apiRouter = express.Router();

    apiRouter.use('/utilisateur', utilisateurRouter);

    return apiRouter;
})();
