const mongoose=require('mongoose');
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
       name:{
        type:String,
        required:[true, 'Name is required']
       },
       phoneNo:{
        type:Number,
        required:[true, 'Phone No is required']
       },
       email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true
       },
       college:{
        type:String,
        enum:['NIT Silchar','IIT Guwahati','Tezpur University'],
        required:true
       },
       college_email:{
        type:String,
        required:true,
        unique:true
       },
       password:{
        type:String,
        required:[true, 'Password is required']
       },
       refreshToken:{
              type:String
       }
       
})

userSchema.pre("save", async function (next) {
       if(!this.isModified("password")) return next();
       this.password=bcrypt.hash(this.password, 10);
       next()
})

userSchema.methods.isPasswordCorrect=async function(password){
       bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
       return jwt.sign({
              _id: this.id,
              name:this.name,
              
        },
         process.env.ACCESS_TOKEN_SECRET,
         {
              expiresIn:ACCESS_TOKEN_EXPIRY
         }
       )
}
userSchema.methods.generateRefreshToken=function(){
       return jwt.sign({
              _id: this.id,
              
        },
         process.env.REFRESH_TOKEN_SECRET,
         {
              expiresIn:REFRESH_TOKEN_EXPIRY
         }
       )
}

module.exports=mongoose.Model('User',userSchema);