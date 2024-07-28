import { Router } from "express";
import sendMessage from "./controllers/sendMessage.js";
import register from "./controllers/register.js";
const userRouter=Router()
import login from "./controllers/login.js";

userRouter.post("/registerwithEmail", sendMessage, register)
userRouter.post("/loginwithemail", login)

export default userRouter 