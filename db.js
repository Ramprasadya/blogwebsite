const mongoose = require('mongoose')
mongoose.set('strictQuery' , false)



mongoose.connect("mongodb://localhost:27017/blogDB").then(()=>{
  console.log("connection with mongoose completed ")
})

const blogSchema  = mongoose.Schema({
    title : String,
    desc : String 
})

const blogPost = mongoose.model("blogPost" , blogSchema)

module.exports = blogPost;