import express from "express" ; 
import { validate } from "../middleware/validator.middleware";
import { registerUser } from "../controllers/auth.controllers";
import { userRegistrationValidator } from "../validators";


const router = express.Router() ; 


router.post('/register' , userRegistrationValidator() ,validate , registerUser) ; // Factory pattern 
// Calling the userRegistrationValidator --> it returns an array 


export default router ; 