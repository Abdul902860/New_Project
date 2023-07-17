const express = require("express")
const mysql = require('mysql')
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello World Abdul rahim ")
});

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"user"
});

app.post("/login",(req,res)=>{
    const sql = "SELECT * FROM user  WHERE email = ? AND password = ?";
    // const values=[ 
    //     req.body.username,
    //     req.body.password
    // ]
    db.query(sql,[ req.body.email, req.body.password],(err,data) => {
        if(err) return res.json("Error")
        if(data.length > 0){
            return res.json("Success")
        } else{
            return res.json("No User exist")
        }
       
    })
})

app.listen(5000,()=>{
    console.log("Listening..")
})