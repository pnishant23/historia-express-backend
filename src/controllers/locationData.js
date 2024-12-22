import { asyncHandler } from "../utils/asyncHandler.js";

const locationData = asyncHandler(async (req, res) => {
    const { lat, lng } = req.params
    console.log(lat, lng)
})

export { locationData }