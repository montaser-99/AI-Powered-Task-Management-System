import databaseConnection from "./config/mongoose.js";
import express from "express"

const port = process.env.PORT || 5000
const app = express()


app.use(morgan("dev"));
app.use(cookieParser());
app.use(helmet()); 
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());















databaseConnection()
.then(() => app.listen(port, () => console.log(`Server is running on port ${port}`)))
.catch((error)=> console.log(error));
