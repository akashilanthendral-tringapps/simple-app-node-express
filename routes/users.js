import express from "express";
import mysql2 from "mysql2";

const router = express.Router();

const connection = mysql2.createConnection({
    "database": "EmployeeDatabase",
    "user" : "root",
    "password" : "password",
    "host" : "localhost"
});

router.get("/", (req, resp) => {
    connection.connect((err) => {
        if(err){
            console.log(err.stack);
            resp.send("Error");
        }else{
           connection.query("select * from EmployeeDatabase.Employee", function(error, results, fields){
               console.log(results);
               resp.send(results);
               
           });
           
        }
    });
    
});

export default router;