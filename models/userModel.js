const mongoose = require("mongoose");
const {Schema} = mongoose;

const bcrypt

const userSchema = new Schema ({
    firstname: String,
    lastname:String,
    nickname:String,
    email:String,
    password:{
        type:String
    },
    creationDate: Date
})

userSchema.pre("save", async function(next){
    const salt = await bcrypt.getSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// compare password 

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user
        }
        throw Error ("incorrect password");
    }
    throw Error ("Incorrect email")
};

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;