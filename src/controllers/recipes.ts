import { resolveSoa } from "dns";
import { Request, response, Response } from "express";
import { addFileToStorage } from ".";
import { Recipe } from "../types";
import { firestore } from "../firebase";

export const likeRecipe = async (req: Request, res: Response) => {
    try {
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({
                message: error.message,
            });
        } else {
            return res.status(500).send({
                message: "An unexpected error occurred",
            });
        }
    }
};

export const bookmarkRecipe = async (req: Request, res: Response) => {
    try {
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({
                message: error.message,
            });
        } else {
            return res.status(500).send({
                message: "An unexpected error occurred",
            });
        }
    }
};

export const getAllRecipes = async (req: Request, res: Response) => {
    try {
        return res.status(200).send({
            message: "Get all recipes"
        })
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({
                message: error.message,
            });
        } else {
            return res.status(500).send({
                message: "An unexpected error occurred",
            });
        }
    }

};

export const getRecipeById = async (req: Request, res: Response) => {
    try {
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({
                message: error.message,
            });
        } else {
            return res.status(500).send({
                message: "An unexpected error occurred",
            });
        }
    }
};

export const createRecipe = async (req: Request, res: Response) => {
    try {
        //@ts-ignore
        const userID = req.user?.id;
        if (!userID) {
            return res.status(400).send({
                message: "User ID is not provided!",
            });
        }

        const { title, ingredients, instructions } = req.body as {
            title: string;
            ingredients: string[];
            instructions: string[];
        };
        const image = req.file;

        if (!title || title.trim().length === 0) {
            return res.status(400).send({
                message: "Title of the recipe is not provided!",
            });
        }

        if (
            !ingredients ||
            !Array.isArray(ingredients) ||
            ingredients.length === 0
        ) {
            return res.status(400).send({
                message: "Ingredients of the recipe is not provided!",
            });
        }

        if (
            !instructions ||
            !Array.isArray(instructions) ||
            instructions.length === 0
        ) {
            return res.status(400).send({
                message: "Instructions of the recipe is not provided!",
            });
        }
        
        if (image) {
            // Add file to storage
            addFileToStorage(image, "recipes");
        }
        const document = firestore.collection("recipes").doc();
        const recipe: Recipe = {
            userID,
            title,
            image: image ? ("recipes/" + image.originalname) : "",
            ingredients,
            instructions,
            id: document.id,
            bookmarks: 0,
            likes: 0,
        };

        await document.create( recipe );
        return res.status(200).send({
            message: recipe,
        });

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({
                message: error.message,
            });
        } else {
            return res.status(500).send({
                message: "An unexpected error occurred",
            });
        }
    }
};

export const deleteRecipeById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id || id.trim().length === 0) {
            return res.status(400).send({
                message: "ID of the recipe is not provided!",
            });
        }
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({
                message: error.message,
            });
        } else {
            return res.status(500).send({
                message: "An unexpected error occurred",
            });
        }
    }
};

export const updateRecipeById = async (req: Request, res: Response) => {
    try {
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).send({
                message: error.message,
            });
        } else {
            return res.status(500).send({
                message: "An unexpected error occurred",
            });
        }
    }
};
