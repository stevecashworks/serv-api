const createCustomError=(info, statusCode)=>{
let message=info|| "An error occured"
let code = statusCode ||500
    console.log(message)
    return {message,code}
}
export default  createCustomError