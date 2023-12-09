let express = require('express');

const userRouter = require('./user/user-router');

/**
 *Available roles 'basic-user', 'medium-user', 'advanced-user', 'admin'
 */

exports.router = (function () {
  let apiRouter = express.Router();

  apiRouter.use('/utilisateur', userRouter);

  return apiRouter;
})();
