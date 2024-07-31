import nodemailer from "nodemailer"
import {config} from "dotenv"
import createDynamicTemplate from "../../../email-template.js"
import generateCode from "../../../generateCode.js"
config()
const s_p= process.env.s_p
const sendMessage=async(req, res, next)=>{
 const {email, name}= req.body
 const  {errorObject,proceed_to_send_email,token}=req
 if(!proceed_to_send_email){
  console.log("registration unsuccessful, will not proceed to send email")
  return next(errorObject)
 }

 const  verificationCode= generateCode()
  try {
    var message = {
      from: "stevefromserv@gmail.com",
      to: email,
      subject: "Welcome aboard from serv",
      text: ``,
      html: createDynamicTemplate(verificationCode, name),
    };
    
const transport =  nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: "stevefromserv@gmail.com",
    pass: s_p,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});
transport.sendMail(message,(err,info)=>{
  if(err){
    console.log(err.message)
    return res.status(500).json({success:false, result:err.message})
    
  }
  else{
    console.log(info)
    req.sendDetails=info
    req.code= verificationCode
    console.log("email has ben sent")
    return res.status(200).json({success:true,result:{token,code:verificationCode}})
    
  }
})

  } catch (error) {
    console.log(error.message)
    return res.json({success:false, result:error.message})
  }
}
export default sendMessage