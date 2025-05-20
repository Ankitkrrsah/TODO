import {body} from "express-validator"

const userRegistrationValidator = ()=>{
    return[
        body('email') 
            .trim()
            .notEmpty.withMessage("Email is required") 
            .isEmail().withMessage("Invalid Email") ,
        
        body('username')
             .trim()
             .notEmpty().withMessage("Username is required") 
             .isLength({min:3}).withMessage("Minimum 3 length username is required") 
             .isLength({max:10}).withMessage("Maximum 10 length username is required") ,
        
        
    ]
}


const userLoginValidator = ()=>{
    body('email')
       .trim()
       .notEmpty().withMessage("Email is required") 
       isEmail().withMessage("Email must be valid") ,

    body('username')
       .trim()
       .notEmpty().withMessage("Username is required") 
       .isLength({min:3,max:10}).withMessage("Invalid Username") 
}

export {userRegistrationValidator} ; 