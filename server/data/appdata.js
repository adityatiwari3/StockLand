const jwt =require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const appdata=new mongoose.Schema({
    Name: {
        type: String,
        required:true
    },
    Email: {
        type: String,
        required:true
    },
    Phone: {
        type: Number,
        required:false
    },
    UserName:{
        type:String,
        required:true
    },
    Password: {
        type: String,
        required:true
    },
    CPassword: {
        type: String,
        required:true
    },
    date:{
        type: Date,
        default:Date.Now
    },
    Feedbacks:[
        {
            CCcode:{
                type:String,
                require:false
            },
            Phone: {
                type: Number,
                required:false
            },
            Email: {
                type: String,
                required:true
            },
            // Maywecontact:{
            //     type:Boolean,
            //     require:false
            // },
            // Contype:{
            //     type:String,
            //     require:false
            // },
            Meassage:{
                type:String,
                require:true
            }
        }
    ],
    // MyStocks:{
    //     StockName :{
    //         type: String,
    //         required:true
    //     },
    //     StockPrice:{
    //         type: Number,
    //         required:true
    //     }
    // },
    Tokens: [
        {
            token:{
                type: String,
                required:true
            }
        }
    ]
})

appdata.pre('save', async function (next){
    if(this.isModified('Password'))
    {
        this.Password = await bcrypt.hash(this.Password, 12);
        this.CPassword = await bcrypt.hash(this.CPassword, 12);
    }
    next();
});


appdata.methods.generateAuthToken = async function () {
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.Tokens = this.Tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err) {
        console.log(err);
    }
}

appdata.methods.addFeedback = async function(CCode, Phone, Email,  Meassage ){
    try{
        this.Feedbacks=this.Feedbacks.concat({CCode, Phone, Email,  Meassage });
        await this.save();
        return this.Feedbacks;
    }catch(err){
        console.log(err);
    }    
}

const Data = mongoose.model('APPDATA',appdata);

module.exports = Data;


