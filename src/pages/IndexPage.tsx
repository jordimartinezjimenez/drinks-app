import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {

    const { drinks } = useAppStore()

    const hasDrinks = useMemo(() => drinks.length, [drinks])

    return (
        <section className="px-6 lg:px-12">
            <h1 className="text-6xl font-bold">Recipes</h1>
            {hasDrinks ? (
                <div className="grid grid-cols-2 gap-6 mt-10 md:grid-cols-3 lg:grid-cols-4">
                    {drinks.map((drink) => (
                        <DrinkCard
                            key={drink.idDrink}
                            drink={drink}
                        />
                    ))}
                </div>
            ) : (
                <>
                    <p className="my-10 text-2xl text-center">No results yet, use the form to search for recipes</p>
                </>
            )}
        </section>
    )
}
