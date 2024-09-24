import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export default function FavoritesPage() {

    const { favorites } = useAppStore()

    const hasFavorites = useMemo(() => favorites.length, [favorites])

    return (
        <div className="min-h-[27.3rem]">
            <h1 className="text-6xl font-extrabold">Favorites</h1>
            <div className="grid grid-cols-2 gap-6 mt-10 md:grid-cols-3 lg:grid-cols-4">
                {hasFavorites ? (
                    favorites.map((drink) => (
                        <DrinkCard
                            key={drink.idDrink}
                            drink={drink}
                        />
                    ))
                ) : (
                    <p className="my-10 text-2xl text-center">No favorites yet</p>
                )}
            </div>
        </div>
    )
}
