import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usersRouter from "./routes/users";
import recipesRouter from "./routes/recipes";

dotenv.config();

import { firestore, storage } from "./firebase";

console.log(firestore.collection("items"));
const PORT = process.env.PORT || 8888;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("api/users", usersRouter);
app.use("api/recipes", recipesRouter);


app.listen(PORT, () => {
    console.log("Server is live at " + PORT);
});
