const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const { OAuth2Client } = require("google-auth-library");
const router = express.Router();
const check = require("../middleware/check");
require("../db/conn");

const Data = require("../data/appdata");
const { response } = require('express');

const client = new OAuth2Client("129471130344-60ilg7c9366ndmfpdva16eoie1t4d5m0.apps.googleusercontent.com");

router.get("/Home", check, (req, res) => {
    res.send(req.rootdata);
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
                console.log(token);
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

router.post("/googleLogin", async (req, res) => {

    try {

        console.log(req.body);
        const tokenId = req.body.token;
        //console.log(tokenId);
        const response = await client.verifyIdToken({ idToken: tokenId, audience: "129471130344-60ilg7c9366ndmfpdva16eoie1t4d5m0.apps.googleusercontent.com" })
        const { email_verified, name, email } = response.getPayload();
        if (email_verified) {
            const userlogin = await Data.findOne({ Email: email });
            if (userlogin) {
                const token = await userlogin.generateAuthToken();
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                })
                console.log("user login succsessfully");
                console.log(token);
                res.status(200).json(1);
            }
            else {
                let Email = email;
                let Password = Email + process.env.SECRET_KEY;
                let CPassword = Email + process.env.SECRET_KEY;
                let UserName = Email + name;
                let Phone = 0;
                let Name = name;
                const data = new Data({ Name, Email, Phone, UserName, Password, CPassword });
                const result = await data.save()
                if (result) {
                    const token = await data.generateAuthToken();
                    res.cookie("jwtoken", token, {
                        expires: new Date(Date.now() + 25892000000),
                        httpOnly: true
                    })
                    console.log("user login succsessfully");
                    console.log(token);
                    res.status(200).json(1);
                }
            }
        }

    }
    catch (err) {
        console.log(err);
    }

})

router.get("/About", check, (req, res) => {
    res.send(req.rootdata);
})
router.post("/Feedback", check,async (req, res) => {
    try {
        const { CCode, Phone, Email,  Meassage } = req.body;

        if (!Email || !Meassage) {
            console.log("fill all the details");
            return res.json({ error: "fill all the form" });
        }
        const userMsg = await Data.findOne({ _id: req.userId });
        if(userMsg){
            const Feedback = await userMsg.addFeedback( CCode, Phone, Email, Meassage );
            await userMsg.save();
            res.status(201).json({message:"we reciev feedback succesfully"});
        }
    } catch (err) {
        console.log(err);
    }
})
router.get("/Logout", (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send(req.rootdata);
})
router.get("/Work", check, (req, res) => {
    res.send(req.rootdata);
})
router.get("/MyStocks", check, (req, res) => {
    res.send(req.rootdata);
})
router.get("/Profile", check, (req, res) => {
    res.send(req.rootdata);
})

module.exports = router;