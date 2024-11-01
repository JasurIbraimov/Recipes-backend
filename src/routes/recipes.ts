import { Router } from "express";
import {
    getRecipeById,
    createRecipe,
    deleteRecipeById,
    updateRecipeById,
} from "../controllers/recipes";

const router = Router();

router.get("/:id", getRecipeById);
router.post("/", createRecipe);
router.delete("/:id", deleteRecipeById);
router.put("/:id", updateRecipeById);

export default router;
