import app from './src/app.js'
import dotenv from 'dotenv' ;
import dbConnect from './src/db/index.js' ;
dotenv.config({
    path : '../.env'
}) ; 

const PORT = process.env.PORT ; 

dbConnect()
    .then(()=>{
        app.listen(PORT , ()=>{
            console.log(`Server is running on PORT : ${PORT}`)
        })
    })
    .catch((err)=>{
      console.log('Error occured ' , err)      
    })
