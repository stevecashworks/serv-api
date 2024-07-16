const chars= "1234567890"

const generateCode=()=>{
    let code="";
    while(code.length<6){
        code += chars[Math.floor(Math.random()*chars.length)]

    }
    return code
}

export default generateCode