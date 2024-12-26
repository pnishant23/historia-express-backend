import { DB_NAME } from "../constants.js"
import { createClient } from '@supabase/supabase-js'
const connectDB = async () => {
    try {
        const supabase = createClient(process.env.DATABASE_URL, process.env.DATABASE_KEY);
        const { data } = await supabase.from('Location').select('count');
        console.log("✅ Database connected successfully");
        return supabase;
    } catch (error) {
        console.log("❌ Database connection failed:", error);
        process.exit(1);
    }
 }

export default connectDB