const CustomAPIError = require('../error/customAPIError')
const {StatusCodes} = require('http-status-codes')

const errorHandler = (err,req,res,next)=>{

  if(err instanceof CustomAPIError){
    return res.status(err.statusCode).json({msg:err.message})
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'Something went to wrong. Please try again later !!!'})
}

module.exports = errorHandler