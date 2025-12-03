import bcrypt from "bcryptjs"
const salt=10;

export const hashPassword =(password:String) =>{
  bcrypt.hash(password,salt);
}
export const comparePassword=(password:String,hash:String) =>{
  bcrypt.compare(password,hash);
}