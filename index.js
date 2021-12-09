import express from "express";
import bodyParser from "body-parser";
import mysql2 from "mysql2";

const app = express();
app.use(bodyParser.json());

const PORT  = 5000;
app.listen(PORT, ()=>{
    console.log(`APP started at ${PORT}`);
});
const strin = "thus is just a string!";
const users = [{
    "name": "akash",
    "id": 1
},
{
    "name": "hari",
    "id": 2
}];

const connection = mysql2.createConnection({
    "database": "EmployeeDatabase",
    "user" : "root",
    "password" : "password",
    "host" : "localhost"
});

app.get("/", (req, resp) => {
    resp.send("Main page!");
});

app.get("/employees", (req, resp) => {
    connection.connect((err) => {
        if(err){
            console.log(err.stack);
            resp.send("Error");
        }else{
           connection.query("select * from EmployeeDatabase.Employee", function(error, results, fields){
               console.log(results);
               resp.send(results);
           });
           //connection.end();
        }
    });
});