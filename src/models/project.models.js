import mongoose, { Schema } from "mongoose";


const PorjectSchema = new Schema({
    name : {
        type : String , 
        required : true , 
        trim : true , 
        unique : true , 
    } , 
    description : {
        type : String , 
        trime : true , 
    } , 
    createdBy : {
        type : Schema.Types.ObjectId ,
        ref : "User" , 
        required : true , 
    }
} , {timestamps : true})


export const Project = mongoose.model("Project" , PorjectSchema) ; 