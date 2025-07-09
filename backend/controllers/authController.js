import jwt from 'jsonwebtoken'
import pool from '../config/db.js'
import bcrypt from 'bcrypt'

// 로그인 API
export const login = async (req, res) => {
    const { student_id , password } = req.body

    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE student_id = ?', [student_id])
        const user = rows[0]
        if (!user) return res.state(401).json({message : "존재하지 않는 사용자입니다."})
        
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(401).json({message : "비밀번호가 틀렸습니다."})
        
        const token = jwt.sign({ id : user.id, student_id : user.student_id }, process.env.JWT_SECRET, { expiresIn : "1h" })
        res.json({ token })
    } catch (err) {
        console.log(err)
        res.status(500).json({message : "서버 오류"})
    }
}

// 회원가입 API
export const register = async (req, res) => {
    const { student_id , password } = req.body

    try {
        const hashedPw = await bcrypt.hash(password, 10)
        const sql = 'INSERT INTO users {student_id, password} VALUES {? , ?}'
        await pool.query(sql, [ student_id, hashedPw])
        res.status(201).json({ message : '회원가입 성공 '})
    } catch (err) {
        console.log(err)
        res.status(500).json({ message : "서버오류"})
    }
}