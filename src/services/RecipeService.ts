import axios from "axios"
import { CategoriesAPIResponseSchema } from "../utils/recipe-schema"

export async function getCategories() {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
    const { data: { drinks } } = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(drinks)

    if (result.success) {
        return result.data
    }
}