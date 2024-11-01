import { Router } from "express";
import {
    getRecipeById,
    createRecipe,
    deleteRecipeById,
    updateRecipeById,
} from "../controllers/recipes";
import { authenticateUser } from '../middlewares'

const router = Router();

router.get("/:id", authenticateUser, getRecipeById);
router.post("/", authenticateUser, createRecipe);
router.delete("/:id", authenticateUser, deleteRecipeById);
router.put("/:id", authenticateUser, updateRecipeById);

export default router;
