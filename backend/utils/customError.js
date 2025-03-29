class CustomError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      
      // Stack trace maintain karega
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export default CustomError;
  