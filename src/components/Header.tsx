import { useMemo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {

    const { pathname } = useLocation();

    const isHome = useMemo(() => pathname === "/", [pathname]);

    return (
        <header className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}>
            <div className="container px-5 py-16 mx-auto">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <img className="w-16" src="/logo.svg" alt="logo" />
                    </Link>
                    <nav className="flex font-bold text-white uppercase gap-x-4 hover:text-slate-300">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500"
                                    : ""
                            }
                        >Home</NavLink>
                        <NavLink
                            to="/favorites"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500"
                                    : ""
                            }
                        >Favorites</NavLink>
                    </nav>
                </div>
                {isHome && (
                    <form className="p-10 mt-16 space-y-6 bg-orange-400 rounded-lg shadow md:w-1/2 2xl:w-1/3">
                        <div className="space-y-4">
                            <label htmlFor="ingredient" className="block text-lg font-extrabold text-white uppercase">Ingredients</label>
                            <input
                                type="text"
                                name="ingredient"
                                id="ingredient"
                                className="w-full p-3 rounded-lg focus:outline-none"
                                placeholder="Enter an ingredient. Ex. Gin, Vodka, Whisky..."
                            />
                        </div>
                        <div className="space-y-4">
                            <label htmlFor="ingredient" className="block text-lg font-extrabold text-white uppercase">Ingredients</label>
                            <select
                                name="category"
                                id="category"
                                className="w-full p-3 rounded-lg focus:outline-none"
                            >
                                <option value="">-- Select --</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            value="Search"
                            className="w-full p-2 font-extrabold text-white uppercase bg-orange-800 rounded-lg cursor-pointer hover:bg-orange-900"
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
