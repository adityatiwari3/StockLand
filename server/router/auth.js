const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

require("../db/conn");

const Data = require("../data/appdata");

router.get("/", (req, res) => {
    res.send("welcome to home router page");
})

router.post("/Register", async (req, res) => {
    const { Name, Email, Phone, UserName, Password, CPassword } = req.body;
    if (!Name || !Email || !UserName || !Password || !CPassword) {
        return res.status(422).json(0);
    }

    try {
        const result = await Data.findOne({ Email: Email })
        if (result) {
            return res.status(422).json(0);
        }
        else if (Password != CPassword) {
            return res.status(422).json(0);
        }
        else {
            const data = new Data({ Name, Email, Phone, UserName, Password, CPassword });
            const result = await data.save()
            if (result) {
                console.log("register succses")
                res.status(200).json(1);
            }
        }
    }
    catch (err) { console.log(err); };
})

router.post("/Login", async (req, res) => {
    try {

        const { Email, Password } = req.body;

        if (!Email || !Password) {
            return res.status(400).json(0);
        }
        const userlogin = await Data.findOne({ Email: Email });
        if (userlogin) {
            const isMatch = await bcrypt.compare(Password, userlogin.Password);

            if (!isMatch) {
                res.status(400).json(0);
            }
            else {
                const token = await userlogin.generateAuthToken();
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                })
                console.log("user login succsessfully");
                res.status(200).json(1);
            }
        }
        else {
            res.status(400).json(0);
        }
    }
    catch (err) {
        console.log(err);
    }
});


module.exports = router;