import databaseConnection from "./config/mongoose.js";
import express from "express"

const port = process.env.PORT || 5000
const app = express()

















databaseConnection()
.then(() => app.listen(port, () => console.log(`Server is running on port ${port}`)))
.catch((error)=> console.log(error));
