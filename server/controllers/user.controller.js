import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateAccessToken from "../sevices/generateAccessToken.js";

// Register
export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields",
                data: {}
            });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                success: false,
                message: "This email already exists",
                data: {}
            });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "Successfully registered",
            data: newUser
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: {}
        });
    }
};
// /////////////////////////////////////////////////////////
// Login
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields",
                data: {}
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "email or password incorrect",
                data: {}
            });
        }
        const match = bcrypt.compare(password, user.passwprd)
        if (!match) {
            return res.status(400).json({
                success: false,
                message: "email or password incorrect",
                data: {}
            });
        }
        const accessToken = generateAccessToken(user)
        const cookieOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        };
        res.cookie("accessToken", accessToken, { ...cookieOption, maxAge: 60 * 60 * 1000 })



        return res.status(201).json({
            success: true,
            message: "login successfully",
            data: user
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: {}
        });
    }
}; 
// ///////////////////////////////////////////////////////////
