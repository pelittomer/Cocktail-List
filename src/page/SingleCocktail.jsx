import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

export default function SingleCocktail() {
    const { id } = useParams()
    const [loading, setLoading] = React.useState(false)
    const [cocktail, setCocktail] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        async function getCocktail() {
            try {
                const response = await fetch(
                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                )
                const data = await response.json()
                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ]
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    }
                    setCocktail(newCocktail)
                } else {
                    setCocktail(null)
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getCocktail()
    }, [id])
    if (loading) {
        return <Loading />
    }
    if (!cocktail) {
        return <h2 className='section-title'>No cocktail to display</h2>
    } else {
        const {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
        } = cocktail
        return (
            <section className='container'>
                <div className='single-cocktail'>
                    <div>
                        <h2 className="title-center">{name}</h2>
                        <img src={image} alt={name}></img>
                    </div>

                    <div className='drink'>
                        <Link to='/' className='btn'>
                            back home
                        </Link>
                        <div className='drink-info'>
                            <p>
                                <span className='drink-data'>name :</span> {name}
                            </p>
                            <p>
                                <span className='drink-data'>category :</span> {category}
                            </p>
                            <p>
                                <span className='drink-data'>info :</span> {info}
                            </p>
                            <p>
                                <span className='drink-data'>glass :</span> {glass}
                            </p>
                            <p>
                                <span className='drink-data'>instructons :</span> {instructions}
                            </p>
                            <p>
                                <span className='drink-data'>ingredients :</span>
                                {ingredients.map((item, index) => {
                                    return item ? <span key={index}> {item}</span> : null
                                })}
                            </p>

                        </div>
                    </div>
                </div>

            </section>
        )
    }
}