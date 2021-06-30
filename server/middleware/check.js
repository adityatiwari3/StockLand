const jwt = require("jsonwebtoken");
const Data = require("../data/appdata");


const check = async (req,res,next) =>{

    try{

      
        let token = req.headers.cookie;
        if(token[0]=='G')
        {
            token = token.substring(24,token.length);
        }
        if(token[0]=='j')
        {
            token = token.substring(8,token.length);           
        }
      
        const veriyfytoken = jwt.verify(token,process.env.SECRET_KEY);

        const rootdata = await Data.findOne({_id:veriyfytoken._id,"Tokens.token":token});
        
        if(!rootdata){ throw new Error("user not find")}

        req.token =token;
        req.rootdata=rootdata;
        req.userId=rootdata._id;
        next();
    }catch(err) {
        res.status(401).send("unathorised");
        console.log(err);
    }
}

module.exports = check;