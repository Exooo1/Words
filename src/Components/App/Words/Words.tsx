import React from 'react'
import './words.scss'

export const Words = () => {
    return <div className='container_words'>
        <div className='container_words_description'>
            <div className='container_words_description_one'>
                <h1>Orders Management</h1>
                <p>Here, you can add and delete your words,also update and add new rules</p>
                <div>
                    <button>Alphabet</button>
                    <button>Last Added</button>
                </div>
            </div >
            <div className='container_words_description_two'>
                <button>+ Add new order</button>
                <input type="text" placeholder='Search by any word'/>
            </div>
        </div>
        <div className='container_words_description_decorate'><div></div></div>
        <div>

        </div>
    </div>
}