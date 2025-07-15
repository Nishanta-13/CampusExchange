import { User } from "../models/User.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import mongoose from "mongoose"
// import cookieParser from "cookie-parser"


const generateAccessAndRefreshToken=async(userId) => {
    
    try {
    const user=await User.findById(userId)
    const accessToken=await User.generateAccessToken()
    const refreshToken=await User.generateRefreshToken()

    user.refreshToken=refreshToken
    await user.save({validateBeforeSave : false})

    return {refreshToken, accessToken}
    } catch (error) {
        throw new ApiError(500,"Something went wrong while generating refresh and access token")
    }
    

}

const createUser=asyncHandler(async (req,res) => {
    
     
   const {name,phoneNo,email,college,college_email,password}= req.body()

   if([name,phoneNo,email,college_email,password].some((field) => field?.trim === "")){
    throw new ApiError(
        400,
        "All fields are required"
    )
   }
   const existedUser=User.findOne({
    $or: [{phoneNo},{college_email}]
   })

   if(existedUser){
    throw new ApiError(
        403,
        "User already exists"
    )
   }

   const user= await User.create({
    name,
    phoneNo,
    email,
    college,
    college_email,
    password
   })

   const createdUser=await User.findById(user._id).select("-password -refreshToken")

   if(!createdUser){
    throw new ApiError(500, "User not created")
   }

   return res.status(201).json(
    new ApiResponse(201,createdUser,"User created successfully")
   )
}
)

const loginUser=asyncHandler(async (req,res) => {
    //req email and password from frontend
    //verify that the fields are not empty
    //check if the user exists
    //verify the password
    //generate access and refresh token

    const {email,password}=req.body()

    if([email,password].some((field) => field?.trim === "")){
        throw new ApiError(400, "Email and Password is required")
    }

    const user=await User.findOne({email})

    if(!user){
        throw new ApiError(404, "No user found please Register")
    }

    const checkPassword=User.isPasswordCorrect(password)

    if(!checkPassword){
        throw new ApiError(401,"Please enter correct password")
    }

   const {refreshToken,accessToken} = await generateAccessAndRefreshToken(user._id)

   const loggedInUser=await User.findById(user._id).select("-password -refreshToken")

    const options={
        httpOnly: true,
        secure: true
    }

    return res.status(200).cookie("refreshToken",refreshToken,options).cookie("accessToken",accessToken,options).json(
        new ApiResponse(200,
            {
                user:loggedInUser,refreshToken,accessToken
            },
            "User logged in successfully"
        )
    )

   })



   export {createUser}
   export {loginUser}