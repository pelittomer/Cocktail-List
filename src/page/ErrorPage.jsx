import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div className='container'>
            <h1 className='error'>Error Page!</h1>
            <Link className='btn' to="/">back home</Link>
        </div>
    )
}

export default ErrorPage