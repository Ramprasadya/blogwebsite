
const mongoose = require('mongoose')
mongoose.set('strictQuery' , false)
require('dotenv').config()

console.log(process.env)

mongoose.connect(process.env.Mongo_Uri).then(()=>{
  console.log("connection with mongoose completed ")
})

const blogSchema  = mongoose.Schema({
    title : String,
    desc : String 
})

const blogPost = mongoose.model("blogPost" , blogSchema)

module.exports = blogPost;