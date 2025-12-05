import express from "express"
import { registerUser,loginUser } from "./auth.service"
import {Request,Response} from "express"
const router=express.Router();

router.post("/register",async (req:Request,res:Response)=>{
  try {
    const {email,password} = req.body;
    const user=await registerUser(email,password)
    res.status(201).json({
      user
    });
  } catch (err:any) {
    const message=err.message?.includes("unique") ? "Email already exists" : err.message || "Server error";
    res.status(message==="Email already exists" ? 409 : 400).json({error:message})
  }
});


router.post("/login",async (req:Request,res:Response)=>{
try {
  const {email,password} =req.body;
const payload=await loginUser(email,password)
res.json(payload)

} catch (err:any) {
  res.status(401).json({error: "Invalid credentials"});
}
});

export default router;