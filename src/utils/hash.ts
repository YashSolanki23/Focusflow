import bcrypt from "bcryptjs"
const salt = 10;


export const hashPassword = async (password: string):Promise<string> => {

  return await bcrypt.hash(password.toString(), salt); 
}

export const comparePassword = async (password: string, hash: string):Promise<boolean> => {
  return await bcrypt.compare(password.toString(), hash.toString());
}