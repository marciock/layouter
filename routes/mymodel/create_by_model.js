const express=require('express');
const router=express.Router();
const layouter=require('../../controllers/layout')

router.post('/',layouter.listCreate)

module.exports=router;