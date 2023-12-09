let express = require('express');
let loginCtrl = require('./login-controller');
let registerCtrl = require('./register');
let resetPwdCtrl = require('./reset-password-controller');
// Validators
const loginValidator = require('./validators/login-validator');
const registerValidator = require('./validators/register-validator');

const accessControl = require('./access-control');
const roles = accessControl.roles;
exports.router = (function () {
  let authRouter = express.Router();

  /**
   * Route for login
   */
  authRouter.post(
    '/login',
    loginValidator.validate('login'),
    loginCtrl.loginCtrl
  );

  /**
   * Route for register
   */
  authRouter.post(
    '/register',
    registerValidator.validate('register'),
    accessControl.canAccess([roles.ADMIN]),
    registerCtrl.register
  );

  authRouter.post(
    '/reset-password',
    registerValidator.validate('resetPwd'),
    accessControl.canAccess([roles.ALL]),
    resetPwdCtrl.resetPwd
  );

  return authRouter;
})();
