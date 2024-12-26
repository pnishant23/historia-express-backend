import { createClient } from "@supabase/supabase-js";
import connetDB from "../db/index.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const locationData = asyncHandler(async (req, res) => {
    const supabase = await connetDB()
    const { lat, lng } = req.query
    const latitude = parseFloat(lat)
    const longitude = parseFloat(lng)
    const { data, error } = await supabase.from('locations').select()
    console.log(error)
    if (error) throw error;
    return res.status(200).json({
        status: 200,
        data: data,
    });
})

export { locationData }