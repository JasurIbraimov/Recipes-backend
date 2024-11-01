import express from "express";
import dotenv from 'dotenv';
dotenv.config();

import {firestore} from "./firebase"


const PORT = process.env.PORT || 8888;
const app =  express()
console.log(firestore.collection("recipe"))


app.listen(PORT, () => {
	console.log("Server is live at " + PORT)
})