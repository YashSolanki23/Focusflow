import jwt from "jsonwebtoken"
import { ENV } from "../config/env"


export const createAccessToken = (user:any) =>{
jwt.sign({id:user.id ,role:user.role},ENV.JWT_SECRET,{expiresIn :"15m"});
}

export const createRefreshToken=(user:any)=>{
  jwt.sign({id:user.id},ENV.REFRESH_SECRET,{expiresIn :"7d"});
}