const express = require("express");
const {sequelize, User} = require("./models");

const app = express();
app.use(express.json());

const PORT  = 5000;
app.listen(PORT, async ()=>{
    console.log(`APP started at ${PORT}`);
    try{
        await sequelize.authenticate();
    }catch(e){
        console.log(e);
    }
});

app.get("/users", async (req, resp) => {
    const users = await User.findAll();
    return resp.status(200).json(users);
});

app.get("/users/:userid", async (req,res)=>
{
    const id = req.params.userid;
    const users = await User.findOne({userId: id}, (err, result)=>{
        if(err){
            return resp.json({"error_message": err});
        }
    });
    return res.status(200).json(users);
})

app.post("/users", async (req, resp) => {
    try{
        const {userId, firstname, lastname, age, emailid, phonenumber} = req.body;
        const users = await User.create({userId, firstname, lastname, age, emailid, phonenumber});
        return resp.status(200).json(users);
    }catch(e){
        return resp.status(500).json({"message":e});
    }
    
});