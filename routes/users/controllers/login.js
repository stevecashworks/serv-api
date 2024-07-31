import { config } from "dotenv"
import createCustomError from "../../../createCustomError.js"
import userModel from "../../../models/users.js"
import jwt from "jsonwebtoken"
config()
const login=async(req,res,next)=>{
try {
    const {email, pass}=req.body
    const thisUser= await userModel.findOne({email})
    if(!thisUser){
        return res.status(404).json({success:false, result: "There  is no user  with this email"})
    }
    else{
        const database_password= thisUser.password
        if(pass===database_password){
            const {password, ...others}=thisUser._doc
            const token=await jwt.sign({id:others._id}, process.env.jwt_pass)
           return res.status(200).json({success:true,result:{token}})
        }
        else{
            return res.status(403).json({success:false,  result:"Access denied, password is incorrect"})
        }
    }
} catch (error) {
    console.log(error.message)
    next(createCustomError(error.message))
}
}
export default login