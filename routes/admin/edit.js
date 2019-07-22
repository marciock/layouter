const express=require('express');
const router=express.Router();
const layouter=require('../../controllers/layout')

router.get('/',layouter.listEdit);

module.exports=router;