import dotenv from "dotenv"
import connetDB from './db/index.js';
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 8000

connetDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running on PORT:", PORT)
        })
    })
    .catch((err) => {
        console.log("MYAQL DB CONNECTION FAILED !!!", err)
    })