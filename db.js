const mongoose = require('mongoose')
mongoose.set('strictQuery' , false)



mongoose.connect("mongodb+srv://ramyadav:yadavram@cluster0.cwmuo.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
  console.log("connection with mongoose completed ")
})

const blogSchema  = mongoose.Schema({
    title : String,
    desc : String 
})

const blogPost = mongoose.model("blogPost" , blogSchema)

module.exports = blogPost;