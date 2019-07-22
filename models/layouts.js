const mongoose=require('mongoose');

let layoutsSchema=new mongoose.Schema({
    title:{type:String},
    category:{type:String},
    creation:{type:Date},
    svg:{type:String}
})

module.exports=mongoose.model('Layouts',layoutsSchema);