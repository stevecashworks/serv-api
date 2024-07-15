import nodemailer from "nodemailer"

const sendMessage=async(req, res, next)=>{
 const {recipient, text}= req.body
  try {
    var message = {
      from: "stevefromserv@gmail.com",
      to: recipient,
      subject: "Welcome aboard from serv",
      text: text,
      html: "<p>HTML version of the message</p>",
    };
    
const transport =  nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: "stevefromserv@gmail.com",
    pass: "ssjlwimysceveogw",
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