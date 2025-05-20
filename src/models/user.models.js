import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto" ; 
import jwt from "jsonwebtoken" ; 
import dotenv from "dotenv" ; 
dotenv.config() ; 
const UserSchema = new Schema({
    avatar : {
        type : {
            url : String , 
            localPath : String , 
        } , 
        default : {
            url : `https://placehold.co/600x400`, 
            localPath : "" , 
        } } , 
        username : {
            type : String , 
            required : true , 
            trim : true , 
            unique : true , 
            lowercase : true , 
        } ,
        email : {
            type : String , 
            required : true , 
            trim : true , 
            unique : true , 
        } , 
        fullname : {
            type : String , 
            required : true , 
            trim : true , 
        } ,
        password : {
            type : String , 
            required : true , 
        } , 
        isEmailVerified : {
            type : Boolean , 
            default : false , 
        },
        forgotPasswordToken : {
            type : String , 
            default : undefined , 
        } ,
        forgotPasswordExpiry : {
            type : Date , 
            default : undefined , 
        } , 
        refreshToken : {
            type : String 
        } , 
        emailVerificationToken : {
            type : String , 
        } , 
        emailVerificationExpiry : {
            type : Date , 
        } , 
})


UserSchema.pre("save" , async (next)=>{
    if(this.isModified("password")){
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash ; 
    }
    next() ; 
})

UserSchema.methods.isPasswordCorrect = async (userGivenPassoword)=>{
    return await bcrypt.compare(userGivenPassoword, this.password) ; 
}

UserSchema.methods.gnerateAccessToken = async () => {
    const token = jwt.sign({
        id : this._id 
    } , process.env.JWT_SECRET_KEY , {expiresIn : process.env.JWT_ACCESS_TOKEN_EXPIRY}) ; 
    return token ; 
}

UserSchema.methods.gnerateRefreshToken = async () => {
    const token = jwt.sign({
        id : this._id 
    } , process.env.JWT_REFRESH_KEY , {expiresIn : process.env.JWT_REFRESH_TOKEN_EXPIRY}) ; 
    return token ; 
}

UserSchema.methods.generateTemporaryToken = ()=>{
    const unhashedToken = crypto.randomBytes(32).toString("hex") ; 
    const hashedToken = crypto.createHash("sha256").update(unhashedToken).digest("hex") ; 
    const tokenExpiry = Date.now() + (1000*60*20) ; 
    return {unhashedToken , hashedToken , tokenExpiry} ; 
}

export const user = mongoose.model("user" , UserSchema) ;