import jwt from "jsonwebtoken"
import { ENV } from "../config/env"


export const createAccessToken = (user: any): string => {
    
   
    if (!ENV.JWT_SECRET) {
        throw new Error("Missing JWT_SECRET environment variable for Access Token creation.");
    }
    
    
    return jwt.sign(
        { id: user.id, role: user.role }, 
        ENV.JWT_SECRET, 
        { expiresIn: "15m" }
    );
}

export function createRefreshToken(user: { id: string }) {
  
    if (!ENV.REFRESH_SECRET) {
  
        throw new Error("Missing REFRESH_SECRET environment variable.");
    }

    return jwt.sign({id: user.id}, ENV.REFRESH_SECRET, {expiresIn :"7d"});
}