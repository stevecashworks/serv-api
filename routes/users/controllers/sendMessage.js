import nodemailer from "nodemailer"
import {config} from "dotenv"
import createDynamicTemplate from "../../../email-template.js"
import generateCode from "../../../generateCode.js"
config()
const s_p= process.env.s_p
const sendMessage=async(req, res, next)=>{
 const {email, name}= req.body
  try {
    var message = {
      from: "stevefromserv@gmail.com",
      to: email,
      subject: "Welcome aboard from serv",
      text: ``,
      html: createDynamicTemplate(generateCode(), name),
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
  }
  else{
    console.log(info)
  }
})
return res.status(200).json({success:true, result:"transport created successfully"})

  } catch (error) {
    console.log(error.message)
    return res.json({success:false, result:error.message})
  }
}
export default sendMessage