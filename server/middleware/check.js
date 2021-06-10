const jwt = require("jsonwebtoken");
const Data = require("../data/appdata");


const check = async (req,res,next) =>{

    try{

        const token = req.cookies.jwtoken;
        const veriyfytoken = jwt.verify(token,process.env.SECRET_KEY);
        // const rootdat = await Data.findOne(_id:veriyfytoken._id,"Tokens.token":token)

    }catch(err) {
        res.status(401).send("unathorised");
        console.log(err);
    }
}

module.exports = check;