import createCustomError from "../../../createCustomError.js"
import userModel from "../../../models/users.js"
const  register=async(req,res,next)=>{
    const {code, info}=req 
    try {
        const newUser=await userModel.create(req.body)
        if(newUser){

            const {password, ...others}=  newUser._doc
            return res.status(200).json({success:true, result:{code,...others}})
        }
    } catch (error) {
        console.log(error.message)
        next(createCustomError(error.message,500))
    }
}

export default  register