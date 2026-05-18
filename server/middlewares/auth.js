import jwt from "jsonwebtoken"
import User from "../models/User.js";


const auth = async (req, res, next) => {
    try {


        const token = req?.cookies?.accessToken
        if (!token) {

            return res.status(401).json({ message: "please authenticate ", error: true, success: false });
        }
        const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(verify.id)
        if (!user) {
            return res.status(401).json({ success: false, error: true, message: "user not found" })
        }
        req.user = user
        next()

    }
    catch (error) {
        return res.status(401).json({ message: "Invalid token", error: true, success: false });
    }


}
export default auth