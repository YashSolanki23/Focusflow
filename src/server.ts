import express from 'express';
import { drizzle } from 'drizzle-orm/neon-http';
import { createApp } from './app';
import { config } from 'dotenv';
import authRoutes from "./modules/auth/authRoutes"
config();

const port = process.env.PORT || 4000;

function start() {
  const app = createApp();

  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
}

start();
