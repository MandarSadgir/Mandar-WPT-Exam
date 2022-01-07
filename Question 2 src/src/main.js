const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const {selectAllUser,addUser}= require("./user");

app.get("/users",async (req,res)=>{
    const list = await selectAllUser();
    res.json(list);
});

app.post("/addUser",async (req,res)=>{
const user = req.body;
await addUser(user);
res.json({message:"user added successfully"});
});

app.listen(4000,()=>console.log("server started"));


