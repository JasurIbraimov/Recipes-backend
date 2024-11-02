import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "../types/custom"; 

export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).send({
            message: "Access denied. No token provided.",
        });
    }
    try {
        const secretKey = process.env.JWT_SECRET_KEY; 
		if(!secretKey) {
			throw new Error("No secret key provided!");
		}
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(401).send({
            message: "Invalid token.",
        });
    }
};