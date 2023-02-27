const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const {Users} = require("../models");

router.post("/", async (req, res) => {
  const {username , password} = req.body;
//   return console.log(req.body);
  bcrypt.hash(password,10).then((hash)=>{
    // console.log(hash);
    Users.create({
        username:username,
        password:hash
    })
    res.json("SUCCESS")
  })
});

router.post("/login", async (req, res) => {
    const {username , password} = req.body;
    const user = await Users.findOne({where:{username:username}})
    if (!user) res.json({errr:"Username doesn't exist"})
    // return console.log(password, user.password);
    bcrypt.compare(password, user.password).then((match)=>{
        if(!match) res.json({error:"Wrong Username and Password Cominition"})
    })
    res.json("Login with Success")
})



module.exports = router; 