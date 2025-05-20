import { ApiResponse } from "../utils/api-res.js"

    const healthCheck = (req , res)=>{
        res.status(200).json(
            new ApiResponse(200 , "Health checked" , {message : "Server is running"}) 
    ) 
}


export {healthCheck}  ;