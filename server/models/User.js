import mongoose from "mongoose"
import bcrypt from "bcrypt"
import isEmail from "validator/lib/isEmail.js";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate(val) {
            if (!isEmail(val)) { throw new Error("emai is invalid") }
        }



    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(val) {
            const password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            if (!password.test(val)) { throw new Error("password should be capital,small ,numbers and special characters") }

        }



    },
    refresh_token: { type: String, default: null },
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },





}, { timestamps: true })
const User = mongoose.model("User", userSchema)




export default User