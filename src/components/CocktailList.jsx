import React from 'react'
import { useGlobalContext } from '../context/context'
import Loading from "../components/Loading"
import Cocktail from './Cocktail'
function CocktailList() {
    const { loading, cocktail } = useGlobalContext()
    if (loading) {
        return <Loading />
    }
    if (cocktail.length < 1) {
        return (
            <section className='container'>
                <h2 lassName="title-center">
                    No cocktails matched your search criteria
                </h2>
            </section>
        )
    }
    return (
        <section className='container'>
            <h2 className="title-center">Cocktails</h2>
            <div className='cocktail-container'>
                {
                    cocktail.map((item) => {
                        return <Cocktail key={item.id} {...item} />
                    })
                }
            </div>
        </section>
    )
}

export default CocktailList