import { Router } from "express";
import sendMessage from "./controllers/sendMessage.js";
import register from "./controllers/register.js";
const userRouter=Router()
import login from "./controllers/login.js";

userRouter.post("/registerwithEmail", register,sendMessage)
userRouter.post("/loginwithemail", login)

export default userRouter 