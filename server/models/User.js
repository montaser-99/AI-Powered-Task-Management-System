import mongoose from "mongoose";
import bcrypt from "bcrypt";
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
            if (!isEmail(val)) {
                throw new Error("email is invalid");
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(val) {
            const passwordRegex =
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

            if (!passwordRegex.test(val)) {
                throw new Error(
                    "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
                );
            }
        }
    },
    role: {
        type: String,
        enum: ["Member", "Team-Leader", "Manager"],
        default: "Member",

    },
    refresh_token: { type: String, default: null },
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
}, { timestamps: true });

// statics
userSchema.statics.checkEmail = function (email) {
    return this.findOne({ email });
};

// hash password
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);

});

const User = mongoose.model("User", userSchema);

export default User;