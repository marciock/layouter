const express=require('express');
const router=express.Router();
const layouter=require('../../controllers/layout')

router.get('/',layouter.remove);

module.exports=router;