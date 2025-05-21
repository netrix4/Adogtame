import React, { createContext, useContext, useState, ReactNode } from "react";
import Animal from "../Interfaces/IAnimal";

interface FavoritesContextType {
    favorites: Animal[]
    toggleFavorite: (animal: Animal) => void
    isFavorite: (animal: Animal) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>
(undefined)

export const FavoritesProvider = ({children}: {children: ReactNode}) =>
{
    const [favorites, setFavorites] = useState<Animal[]>([])

    const toggleFavorite = (animal: Animal) => {
        setFavorites((prev) => {
            const exists = prev.some((a) => a.nombre === animal.nombre)
            if (exists) {
                return prev.filter((a) => a.nombre !== animal.nombre)
            } else {
                return [...prev, animal]
            }
        })
    }

    const isFavorite = (animal: Animal) =>
        favorites.some((a) => a.nombre === animal.nombre)

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite}}>
            {children}
            </FavoritesContext.Provider>
    )
}

export const useFavorites = () => {
    const context = useContext(FavoritesContext)
    if (!context) {
        throw new Error("fuera provider")
    }
    return context
}



