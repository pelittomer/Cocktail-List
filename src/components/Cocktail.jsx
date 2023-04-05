import React from 'react'
import { Link } from 'react-router-dom'

function Cocktail({ image, name, info, glass, id }) {
    return (
        <div className='cocktail'>
            <div className='cocktail-image'>
                <img src={image} alt={name} />
            </div>
            <div className='cocktail-content'>
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} className='btn'>
                    details
                </Link>
            </div>
        </div>
    )
}

export default Cocktail