import { Router } from "express";
import sendMessage from "./controllers/sendMessage.js";
const userRouter=Router()


userRouter.post("/sendcode", sendMessage)


export default userRouter 