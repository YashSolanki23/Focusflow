import express from "express"
import cors from "cors"
import authRoutes from "./modules/auth/authRoutes"
export function createApp(){

  const app=express();
  app.use(cors());
  app.use(express.json());
   app.use("/auth",authRoutes);
  app.get('/api/health',(req,res)=>{
    res.status(201).json({
        health:"ok"
    })
  })
return app;
}
