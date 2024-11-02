import { Request, response, Response } from "express";

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
}

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
}

export const getAllRecipes = async (req: Request, res: Response) => {
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
}

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
