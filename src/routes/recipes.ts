import { Router } from "express";
import {
    getRecipeById,
    createRecipe,
    deleteRecipeById,
    updateRecipeById,
} from "../controllers/recipes";
import { authenticateUser } from '../middlewares';
import multer from "multer";

const router = Router();
const upload = multer();

router.get("/:id", authenticateUser, getRecipeById);
router.post("/", authenticateUser, upload.single("file"), createRecipe);
router.delete("/:id", authenticateUser, deleteRecipeById);
router.put("/:id", authenticateUser, updateRecipeById);

export default router;
