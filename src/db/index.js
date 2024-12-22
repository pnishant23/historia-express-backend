import { DB_NAME } from "../constants.js"
import { createClient } from '@supabase/supabase-js'
const connetDB = async () => {
    try {
        const supabase = createClient(process.env.DATABASE_URL, process.env.DATABASE_KEY);
        console.log("DATABASE CONNECTED !! DB HOST : ")

    } catch (error) {
        console.log("MYSQL DATBASE CONNECTION ERROR", error)
        process.exit(1)
    }
}

export default connetDB