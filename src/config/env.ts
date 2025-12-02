import "dotenv/config"

export const ENV ={
PORT:Number(process.env.PORT) || 4000,
DATABASE_URL:process.env.DATABASE_URL!
}