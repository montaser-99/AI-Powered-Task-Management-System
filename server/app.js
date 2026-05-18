import databaseConnection from "./config/mongoose.js";
import express from "express"
import userRouter from "./routes/user.routes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet"


const port = process.env.PORT || 5000
const app = express()


app.use(morgan("dev"));
app.use(cookieParser());
app.use(helmet()); 
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use((req, res, next) => {
    console.log("REQUEST:", req.method, req.url);
    next();
});


app.use("/api/users", userRouter);


databaseConnection()
.then(() => app.listen(port, () => console.log(`Server is running on port ${port}`)))
.catch((error)=> console.log(error));
