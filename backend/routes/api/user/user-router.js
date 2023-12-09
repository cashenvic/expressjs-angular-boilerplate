let express = require('express');
let router = express.Router();
let photoRouter = require('./photo/photo-router');

let userValidator = require('./user-validator');
const accessControl = require('../../auth/access-control');
let userCtrl = require('./user-controller');
const roles = accessControl.roles;

//get all users

router.get(
  '/',
  userValidator.validate('getAllUsers'),
  accessControl.canAccess([roles.ALL]),
  userCtrl.getAll
);

router.get('/whoami', accessControl.canAccess([roles.ALL]), userCtrl.whoAmI);

router.get(
  '/:id',
  userValidator.validate('getUser'),
  accessControl.canAccess([roles.ALL]),
  userCtrl.getUserById
);

router.put(
  '/',
  userValidator.validate('update'),
  accessControl.canAccess([roles.ALL]),
  userCtrl.updateUser
);

router.delete(
  '/:id',
  userValidator.validate('getUser'),
  accessControl.canAccess(['admin', 'advanced-user']),
  userCtrl.destroy
);

router.use('/photo', photoRouter);

module.exports = router;
