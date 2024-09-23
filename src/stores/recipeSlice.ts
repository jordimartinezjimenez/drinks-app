import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, Drinks, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilters: SearchFilter) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {} as Categories,
    drinks: {} as Drinks,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({ categories })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({ drinks })
    },
})