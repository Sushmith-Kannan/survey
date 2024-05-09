const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


//express call
const app = express()


//set the middlewares
app.use(express.json())
app.use(cors({
    "origin":"*"
}))
app.use(bodyParser.json())

//port

const PORT=5000

//connect to mongo database

mongoose.connect('mongodb://localhost:27017/mern');

//check connection
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

//routes

app.post("/api/blogs",async(req,res)=>{
    // console.log(rer.body)
    try{
        const blog=await Blogs.create({
            title:req.body.title,
            blog:req.body.blog,
            author:req.body.author,
        })
        res.status(200).json({status:"ok"})
    }catch(err){
      res.status(201).json(err)
    }
})

app.get("/api/getblogs",async(req,res)=>{
    try{
      const list = await Blogs.find()
      if(list){
        res.status(200).json({list:list})
      }
  
    }catch(err){
      res.status(201).json(err)
    }
  })

app.delete('/api/deleteblogs/:id',async(req,res)=>{
    await Blogs.findByIdAndDelete(req.params.id)
    try{
        res.status(204).json({
            status : 'Success',
            data : {}
        })
      }catch(err){
          res.status(500).json({
              status: 'Failed',
              message : err
          })
      }
  }
)




app.post("/api/register",async(req,res)=>{
  console.log(req.body)
  try{
    const user = await User.create({
      email:req.body.email,
      name:req.body.name,
      employeeId:req.body.employeeId,
      password:req.body.password,
      
    })
    res.status(200).json({status:"ok"})
  }catch(err){
    res.status(201).json(err)
  }
})


app.post("/api/login",async(req,res)=>{
  console.log(req.body)
  try{
    const user = await User.findOne({
      employeeId:req.body.employeeId,
      password:req.body.password
    }).then (result=>{
      if(result){
      if(result.password === req.body.password){
        res.json("Success")
      }else{
        res.json("Incorrect")
      }}
      else{
        res.json("no records found")
      }
    })
   
  }catch(err){
    res.status(201).json(err)
  }
})
 

//blog schema
const Schema =mongoose.Schema;
const BlogSchema= new Schema({
    title:{type: String, required: true,unique:true},
    blog:{type: String, required: true},
    author:{type: String, required: true},
}, { timestamps: true });

//user schema
const userSchema = new Schema({
  employeeId: {type: String, required: true, unique:true},
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });


const User = mongoose.model('User', userSchema);
const Blogs = mongoose.model('blogs',BlogSchema);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  }); 