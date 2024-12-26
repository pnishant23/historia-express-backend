// locationDataRoute.js
import { Router } from "express"
import { locationData } from "../controllers/locationData.js"

const router = Router()

router.route('/').get(locationData)

export default router