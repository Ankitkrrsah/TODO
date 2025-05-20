import mongoose, { Schema } from "mongoose";
import { AvaliableUserRoles, UserRoleEnum } from "../utils/constants.js"; 


const ProjectMemberSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId , 
        ref : "User" ,
        required : true ,
    } , 
    project : {
        type : Schema.Types.ObjectId , 
        ref : "Project" , 
        required : true ,
    } , 
    role : {
        type : String , 
        enum : AvaliableUserRoles ,
        default : UserRoleEnum.MEMBER ,
    }
})


export const ProjectMember = mongoose.model("ProjectMember" , ProjectMemberSchema) ; 