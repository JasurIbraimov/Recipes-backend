export interface Recipe {
	userID: string;
	id: string;
	title: string;
	ingredients: string[];
	instructions: string[];
	image: string;
	likes: number;
	bookmarks: number;
}