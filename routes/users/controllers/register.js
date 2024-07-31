import { config } from "dotenv"
import createCustomError from "../../../createCustomError.js"
import userModel from "../../../models/users.js"
import jwt from "jsonwebtoken"

config()
const  register=async(req,res,next)=>{
    
    try {
        const newUser=await userModel.create({...req.body, password:req.body.pass})
        if(newUser){
        
            const {password, ...others}=  newUser._doc
            const token= await jwt.sign({id:others._id},process.env.jwt_pass)
            req.proceed_to_send_email=true
            req.token=token
            next()
        }
    } catch (error) {
        req.proceed_to_send_email=false
        console.log(error.message)
        req.errorObject=(createCustomError(error.message,500))
        next()
    }
}

export default  register