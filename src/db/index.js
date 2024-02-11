import mysql from "mysql2/promise"
import { DB_NAME } from "../constants.js"

const connetDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: DB_NAME,
        });

        console.log("MYSQL DATABASE CONNECTED !! DB HOST : ")
        // console.log(connectionInstance)

        const [rows, fields] = await connection.execute("CREATE TABLE IF NOT EXISTS clients (name VARCHAR(255), address VARCHAR(255))");


    } catch (error) {
        console.log("MYSQL DATBASE CONNECTION ERROR", error)
        process.exit(1)
    }
}

export default connetDB