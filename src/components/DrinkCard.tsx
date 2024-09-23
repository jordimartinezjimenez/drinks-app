import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({ drink }: DrinkCardProps) {
    return (
        <article className="overflow-hidden border shadow-lg rounded-xl">
            <figure className="overflow-hidden">
                <img
                    src={drink.strDrinkThumb}
                    alt={`Image of ${drink.strDrink}`}
                    className="transition-transform hover:scale-110 hover:rotate-2"
                />
            </figure>
            <div className="p-5">
                <h2 className="text-lg font-black truncate md:text-2xl">{drink.strDrink}</h2>
                <button
                    type="button"
                    className="w-full p-3 mt-5 text-sm font-bold text-white transition bg-orange-400 rounded-lg md:text-lg hover:bg-orange-500"
                >Show Recipe</button>
            </div>
        </article>
    )
}
