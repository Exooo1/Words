import React from 'react'
import './notfound.scss'

export const NotFound = () => {
    return <div className='notfound'>
        <div className='notfound_content'>
            <div className='notfound_content_description'>
                <h1>
                    YourVocabulary
                </h1>
                <p>We're sorry,the page you requested could not be found. Please go back to the homepage!</p>
            </div>
            <div className='notfound_content_img'>
                <img src="https://cdn-icons-png.flaticon.com/512/7066/7066171.png" alt="notFound"/>
                <p>404</p>
            </div>
        </div>
    </div>
}