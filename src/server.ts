import express, { Application } from 'express'
import { createApp } from './app'
const port:any=  process.env.PORT || 4000;
function start(){

 const app=createApp();

  app.listen(port,()=>{
    console.log(`server is running at ${port}`)
  })
}
 start();