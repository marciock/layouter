const express = require('express');
const router = express.Router();

const layouter=require('../../controllers/layout')


/* GET home page. */
router.get('/', layouter.viewSVG);

module.exports = router;
