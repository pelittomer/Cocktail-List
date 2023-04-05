import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

function HomePage() {
    return (
        <div>
            <SearchForm />
            <CocktailList />
        </div>
    )
}

export default HomePage