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

app.get("/posts/:id", (req, res) => {
    const postId = req.params.id
    console.log(postId);
    const post = posts.find((post)=>post.id === postId)
    if(post){
        res.json(post)
    }else{
        res.status(404)
    }
})

app.delete("/posts/:id", (req, res) => {
    const postID = req.params.id;
    const post = posts.findIndex((post) => post.id === postID);
    if (post !== -1) {
        const deletePost = posts.splice(post, 1);
        res.json({ message: "Deleted" });
    } else {
        res.send(404).json({ message: "Post Not Found" });
    }
});


app.listen(PORT,()=>{
    console.log("server is running");
})