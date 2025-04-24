import {catchAsyncError} from "../middlewares/catchAsyncError.js"
import ErrorHandler from "../middlewares/errorMiddlewares.js"
import User from "../models/userModel.js"
import bycrypt from "bcrypt"
import crypto from "crypto"

export const register = catchAsyncError(async (req,res,next)=>{})