import { Router } from "express";
import { Register } from "../controllers/user.controller.js"
import { Login } from "../controllers/user.controller.js";
const userRouter=Router()

userRouter.post("/sign-up",Register)
userRouter.post("/sign-in",Login)



export default userRouter 