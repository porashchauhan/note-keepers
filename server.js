require("dotenv").config(); 
const express = require("express");
const mongoose= require("mongoose");
const Note = require("./models/notes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended:true
}));

mongoose.connect(process.env.DB_USER,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});



app.get("/",(req,res)=>{
  Note.find({},(err,elements)=>{
    if(err) console.log(err);
    else res.send(elements);

  });

});

app.post("/",(req,res)=>{
  const title=req.body.title;
  const content=req.body.content;
  
  const note=new Note({
    title:title,
    content:content
  });

  note.save(function(err){
    if(err){
        res.send(err);
    }
    else{
        res.send("successfully added a new article");
    }

});

});


app.delete("/:id",(req,res)=>{
  const id=req.params.id;
  Note.deleteOne({_id:id},(err)=>{
    if(err) console.log(err);
    else res.send("note deleted");
  });


});





let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}
app.listen(port, function() {
 console.log("Server started successfully");
});

