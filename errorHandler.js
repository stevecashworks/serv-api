const errorHandler=(err,req,res,next)=>{
    const {message, code}= err
    console.log({message})

    return res.status(code).json({
        success:false,
        result:message
    })
    
}
export default errorHandler