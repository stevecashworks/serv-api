import express from "express"
import { config } from "dotenv"
import cors from "cors"
import userRouter from "./routes/users/userRoutes.js"
import errorHandler from "./errorHandler.js"
config()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const server=express()
server.get("/",(req,res)=>{
    return res.send("hello")
})
server.use(express.json())
server.use(cors())
server.use("/users",userRouter)



//  error handling middleware
server.use(errorHandler)
const port = process.env.PORT;
server.listen(port, ()=>{
    console.log(`server is listening on port: ${port}`)
})