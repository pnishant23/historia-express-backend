import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.static("public"))

app.use(cookieParser())

import locationDataRoute from "./routes/locationDataRoute.js"

app.use("/api/v1/locationData", locationDataRoute)
app.get("/api/v1/check", (req, res)=>{
    res.send('helllo')
})

export { app }