import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, getDoc } from 'firebase/firestore';
import { Recipe } from '../types/Recipe';
import { db } from './config';


const recipesCollection = collection(db, 'recipes');

export const addRecipe = async (recipe: Recipe) => {
    try {
        const docRef = await addDoc(recipesCollection, recipe);
        return docRef.id;
    } catch (error) {
        console.error("Error adding recipe: ", error);
    }
};

export const updateRecipe = async (id: string, updatedRecipe: Partial<Recipe>) => {
    try {
        const recipeDoc = doc(db, 'recipes', id);
        await updateDoc(recipeDoc, updatedRecipe);
    } catch (error) {
        console.error("Error updating recipe: ", error);
    }
};

export const deleteRecipe = async (id: string) => {
    try {
        const recipeDoc = doc(db, 'recipes', id);
        await deleteDoc(recipeDoc);
    } catch (error) {
        console.error("Error deleting recipe: ", error);
    }
};

export const getRecipe = async (id: string) : Promise<Recipe | null> => {
    try {
        const recipeDocRef = doc(db, 'recipes', id);
        const recipe =  await getDoc(recipeDocRef);
        if (recipe.exists()) {
            const data = recipe.data();
            if (typeof data.title === "string" && typeof data.description === "string") {
                return { id: recipe.id, ...data } as Recipe;
            } else {
                console.error("Invalid recipe data format");
                return null;
            }
        } else {
            console.log("No document found for this ID");
            return null;
        }
    } catch (error) {
        console.error("Error getting recipe: ", error);
        return null;
    }   
}

