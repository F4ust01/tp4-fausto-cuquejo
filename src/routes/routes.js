const { get, post, put, deletetp } = require('../controllers/controllers.js');

const router = require('express').Router();

router.get('/',get);
router.post('/',post);
router.put('/',put);
router.delete('/',deletetp);

module.exports = router;