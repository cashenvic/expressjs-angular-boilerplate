let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function (_, res, __) {
    res.send('respond with a resource');
});

module.exports = router;
