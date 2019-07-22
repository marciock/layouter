const express=require('express');
const router=express.Router();
const layouter=require('../controllers/layout')
//const model=require('../data/json/models')


router.get('/',layouter.listAll)

module.exports=router;
