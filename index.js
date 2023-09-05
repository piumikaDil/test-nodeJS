import express, {json}  from "express";
const app = express()

const PORT = 5000;
const posts = []

app.use(json())

 app.get("/posts",(req,res)=>{
     res.json(posts)
 })

app.post("/posts", (req, res) => {
   const body = req.body;
   posts.push(body)
   res.send(body)
})

app.listen(PORT,()=>{
    console.log("server is running");
})