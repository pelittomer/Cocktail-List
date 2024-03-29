import React from 'react'
import { useGlobalContext } from '../context/context'

function SearchForm() {
    const { setSearchTextValue } = useGlobalContext()
    const searchValue = React.useRef('')

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    function searchCocktail() {
        setSearchTextValue(searchValue.current.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <section className='search-box'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Search your favorite cocktail</label>
                    <input
                        placeholder='Search...'
                        type='text'
                        name='name'
                        id='name'
                        ref={searchValue}
                        onChange={searchCocktail}
                    />
                </div>
            </form>
        </section>
    )
}
export default SearchForm