import { validationResult } from "express-validator"

export const validate = (req , res , next)=>{
    const errors = validationResult(req) ; 
    if(errors.isEmpty()) next() ; 
    
    const allTheErrors = [] ; 
    errors.array().map((ele)=>allTheErrors.push({
        [ele.path] : err.msg
    })) ; 
    throw new ApiError(422 , "Failed to validate" , allTheErrors) ; 
}