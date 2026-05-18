import User from "../models/User.js"




export const createProject=async(req,res)={
    try {
        
    } catch (error) {
           console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: {}
        });
    }
}