import express from "express";
import { query , validationResult , matchedData} from "express-validator";

const app = express() ;

// router imports 
import checkHealthRoute from "./routes/healthCheck.routes.js"

app.use(express.json()) ; 



app.use("/api/v1/" , checkHealthRoute) ; 




export default app ;    
