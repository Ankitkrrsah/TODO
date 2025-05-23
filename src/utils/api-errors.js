class ApiError extends Error {
    constructor(
        statusCode , 
        message , 
        errors = [] ,
        stack = ""  ,
        sucess 
    ){
        super(message) ;
        this.statusCode = statusCode ;
        this.message = message ;
        this.errors = errors ;
        this.sucess = false ; 
        if(stack){
            this.stack = stack; 
        }
    }
}