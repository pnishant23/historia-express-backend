import { Router } from "express"
import { locationData } from "../controllers/locationData.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const router = Router()

console.log(locationData)

router.route('/data').post((req, res) => {
    console.log(req)
    const { lat, lng } = req.params
    console.log(lat, lng)
    res.send(`got your location ${lat} and ${lng}}`)
})

export default router