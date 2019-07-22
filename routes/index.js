const express = require('express');
const router = express.Router();
const menu=require('../lib/menuhome')
//const layout=require('../controllers/layout')


/* GET home page. */
router.get('/', (req,res)=>{
    res.render('layouts/home',{menus:menu})
});

module.exports = router;
