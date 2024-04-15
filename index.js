import express from "express"
const app = express()
const port = 3000
app.listen(port,()=>{
    console.log("sever is running")
})
app.use("/",(req,res) => {
    res.json({message:"hy i am kamlesh chandel "});
})