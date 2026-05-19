import jwt from "jsonwebtoken"

export const protect = async (req,res,next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(token){

        const decode =  await jwt.verify(token,process.env.JWT_SECRET)
        
        req.user = decode
        
    }else {
        return res.status(401).json("No token available.");
    }

    next()

}