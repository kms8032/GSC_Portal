// DB 연결 설정

import mysql from "mysql2/promise"
import dotenv from "dotenv"

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

export default pool