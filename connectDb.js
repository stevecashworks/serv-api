import {connect} from "mongoose"


const connectDb=async(uri)=>{
 
try {
    const connection= await connect(uri)
    console.log(`successfully connected to database using:
        
        ${uri}`)
    return connection
} catch (error) {
    console.log(error.messge)
}



}
export default connectDb