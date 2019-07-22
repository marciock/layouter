const fs=require('fs');
const monggose=require('mongoose');
const modelLayouts=require('../models/layouts');



module.exports={
    listAll:(req,res)=>{
        modelLayouts.find({}).then((results)=>{
           
            //res.json(results);
            res.render('models/index',{models:results})
        })
    },
      listAdm:(req,res)=>{
        modelLayouts.find({}).then((results)=>{
           
            //res.json(results);
            res.render('admin/index',{layouts:results})
        })
    },
    listEdit:(req,res)=>{
        let id=req.query.id;
        console.log(id);
        modelLayouts.findOne({'_id':id}).then((results)=>{
           
          //  res.json(results);
            res.render('admin/edit',{layouts:results})
        })
    },
    listCreate:(req,res)=>{
        let id=req.body.id;
        console.log(id);
        modelLayouts.findOne({'_id':id}).then((results)=>{
           
        //  res.json(results);
            res.render('models/create-by-model',{layouts:results})
        })
    },
    viewSVG:(req,res)=>{
        let id=req.query.id;

        modelLayouts.findOne({_id:id}).then((results)=>{
            res.json({results})
        })
    },
    new:(req,res)=>{

        let file=fs.readFileSync('./tmp/filesvg');
        // console.log(`svg ${req.body}`)

        let newLayouts=new modelLayouts({
            title:req.body.title,
            category:req.body.category,
            creation:Date(),
            svg:file
        });

        newLayouts.save((err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error saving data',
                    error:err
                });
            }
        res.redirect('/add_admin')
        

        })

        
    },
    remove: (req,res)=>{
        let id=req.query.id;

        modelLayouts.findByIdAndRemove(id,(err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error getting data'
                });
            }
            return res.redirect('/admin')
        })
    },
    update: (req,res)=>{
        let id=req.body.id;
        console.log(id);
        modelLayouts.findOne({'_id':id}, (err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error saving data',
                    error:err
                });
            }
            if(!data){
                return res.status(404).json({
                    message:'No such data'
                });
            }
    
            data.title=req.body.title ? req.body.title:data.title;
            data.category=req.body.category ? req.body.category:data.category;
            data.creation=Date() ? Date():data.creation;
            data.svg=req.body.svg ? req.body.svg:data.svg;
           
    
            data.save((err,data)=>{
                if(err){
                    return res.status(500).json({
                        message:'Error getting data'
                    });
                }
                if(!data){
                    return res.status(404).json({
                        message:'No such data'
                    });
                }
                //return res.json(data);
    
                res.redirect('/admin')
            })
    
    
        })
    }
    
}
