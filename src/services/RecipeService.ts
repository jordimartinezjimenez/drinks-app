import axios from "axios"
import { CategoriesAPIResponseSchema, DrinksAPIResponse } from "../utils/recipe-schema"
import { SearchFilter } from "../types"

export async function getCategories() {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
    const { data: { drinks } } = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(drinks)

    if (result.success) {
        return result.data
    }
}

export async function getRecipes(filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data: { drinks } } = await axios(url)
    const result = DrinksAPIResponse.safeParse(drinks)

    if (result.success) {
        return result.data
    }
}