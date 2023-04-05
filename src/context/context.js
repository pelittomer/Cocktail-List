import React, { useCallback } from "react"
import { useContext, useEffect, useState } from "react"


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [searchTextValue, setSearchTextValue] = useState('')
    const [cocktail, setCocktail] = useState([])

    const fetchCocktail = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTextValue}`)
            const data = await response.json()
            const { drinks } = data
            if (drinks) {
                const newCocktail = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                    } = item

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                })
                setCocktail(newCocktail)
            } else {
                setCocktail([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [searchTextValue])
    useEffect(() => {
        fetchCocktail()
    }, [searchTextValue, fetchCocktail])

    return (
        <AppContext.Provider value={{
            cocktail, setCocktail, loading,setSearchTextValue
        }}>
            {children}
        </AppContext.Provider>
    )

}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider }