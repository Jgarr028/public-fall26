import { Router } from "express";
import { connection } from "../connection/connection.js";
const user = Router();

// =======================
// GET ALL USERS
// =======================
user.get("/", async (req, res) => {
    try {
        const [rows] = await connection.execute("SELECT * FROM user_info");

        res.status(200).json({
            status: 200,
            message: "Users fetched successfully",
            data: rows
        });

    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
            data: null
        });
    }
});


user.get("/:id", async (req, res) => {
    try {
        const [rows] = await connection.execute("SELECT * FROM user_info where u_id=?", [req.params.id]);

        if (rows.length == 0) {
            return res.json({
                status: 404,
                message: 'User not found'
            })
        }

        res.status(200).json({
            status: 200,
            message: "Users fetched successfully",
            data: rows
        });

    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
            data: null
        });
    }
});

//Post
user.post("/", async (req, res) => {
    try {

        const {
            u_first_name,
            u_last_name,
            u_email,
            u_password,
            u_is_verified
        } = req.body

        const [rows] = await connection.execute("Insert into user_info (u_first_name,u_last_name,u_email,u_password,u_is_verified) values (?,?,?,?,?)", [u_first_name, u_last_name, u_email, u_password, u_is_verified]);

        res.status(200).json({
            status: 200,
            message: "Users fetched successfully",
            data: rows.insertId
        });

    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
            data: null
        });
    }
});




user.get('/test', (req, res) => {
    res.json({
        "status": 200,
        "message": "Response by get api"
    })
})



export default user;