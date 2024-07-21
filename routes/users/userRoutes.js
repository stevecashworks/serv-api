import { Router } from "express";
import sendMessage from "./controllers/sendMessage.js";
import register from "./controllers/register.js";
const userRouter=Router()


userRouter.post("/signInWithEmail", sendMessage, register)


export default userRouter 