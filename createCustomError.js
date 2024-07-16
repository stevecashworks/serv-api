const createCustomError=(message, code)=>{
let message=message|| "An error occured"
let code = code ||500
    console.log(message)
    return {message,code}
}
export default  createCustomError