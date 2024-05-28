import mongoose from 'mongoose';
const articleSchema=new mongoose.Schema({
    "title":{type:String},
    "description":{type:String}
},{
    collection:"News"
})
 
const Article=mongoose.model("articleSchema",articleSchema);
export {Article};