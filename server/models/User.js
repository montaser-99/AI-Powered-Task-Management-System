import mongoose from "mongoose"

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


    },
    password: {
        type:String,
        required: true,
        trim: true,


    },
    refresh_token: { type: String,default:null },
    team: {   type: mongoose.Schema.Types.ObjectId,ref: "Team" },





}, { timestamps: true })
const User = mongoose.model("User", userSchema)




export default User