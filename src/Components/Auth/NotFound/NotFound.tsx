import React from 'react'
import './notfound.scss'

export const NotFound = () => {
    return <div className='notfound'>
        <div className='notfound_content'>
            <p>404</p>
            <h1>Page Not Found</h1>
            <p>We're sorry, the page you requested could not be found. Please go to back.</p>
        </div>
    </div>
}