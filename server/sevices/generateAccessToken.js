import jwt from "jsonwebtoken"

const generateAccessToken = async (user) => {
    try {
        const secret = process.env.ACCESS_TOKEN_SECRET
        const token = await jwt.sign({ id: user._id, role: user.role }, secret, { expiresIn: "1h" })
        return token
    } catch (error) {
        return error

    }

}



export default generateAccessToken