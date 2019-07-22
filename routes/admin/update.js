const express = require('express');
const router = express.Router();
const multer=require('multer');
const layouter=require('../../controllers/layout')

const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'./tmp/')
  },
  filename:function(req,file,cb){
    cb(null,'filesvg')
  }
})

//let upload=multer({dest:'./tmp/'});

const upload=multer({storage:storage})


router.post('/',upload.single('svg'),layouter.update)



module.exports = router;
