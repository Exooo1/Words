import React, {useEffect, useState} from 'react'
import {Word} from './Word/Word'
import './words.scss'
import {useAppDispatch, useAppSelector} from '../../../Redux/ReduxUtils'
import {fetchDeleteWord, fetchGetWords, WordType} from '../../../Redux/WordsReducer'
import {WordModal} from '../../../Common/Modal/WordModal/WordModal'
import {SortElement} from "./SortElements/SortElement";
import {Pagination} from "./Pagination/Pagination";


export const Words = () => {
    const [current, setCurrent] = useState<number>(1)
    const dispatch = useAppDispatch()
    const {words, totalWords} = useAppSelector((state) => state.wordsSlice)
    const resultPagination = Math.ceil(totalWords / 8)
    const arr: Array<number> = []
    for (let i = 1; i <= resultPagination; i++) {
        arr.push(i)
    }
    useEffect(() => {
        dispatch(fetchGetWords(current))
    }, [current,totalWords])
    const sortElements = [
        {id: 1, name: 'Alphabet', isActive: true},
        {id: 2, name: 'Description', isActive: true},
        {id: 3, name: 'Added', isActive: true},
    ]
    const [isModal, setIsModal] = useState<boolean>(false)
    const handlerIsModal = (value: boolean) => setIsModal(value)
    const handlerCurrentPagination = (value: number) => setCurrent(value)
    const handlerButtonNext = () => {
        if (current === arr.length) return
        setCurrent(state => state + 1)
    }
    const handlerButtonPrevious = () => {
        if (current === 1) return
        else setCurrent(state => state - 1)
    }
    const showing = () => {
        const total = totalWords - (current * 8)
        if (total > 0) return current * 8
        else return current * 8 - Math.abs(total)
    }
    return (
        <div className='container_words'>
            {isModal && <WordModal handlerIsModal={() => handlerIsModal(false)}/>}
            <div className='container_words_description'>
                <div className='container_words_description_one'>
                    <h1>Words Management</h1>
                    <p>Here, you can add and delete your words,also update and add new rules.</p>
                </div>
                <div className='container_words_description_two'>
                    <button onClick={() => handlerIsModal(true)}>+ Add new word</button>
                    <div>
                        <img src='https://cdn-icons-png.flaticon.com/512/7884/7884209.png' alt=''/>
                        <input type='text' placeholder='Search by any words'/>
                    </div>
                </div>
            </div>
            <div className='container_words_sort'>
                <div className='container_words_sort_buttons'>
                    {sortElements.map((item) => <SortElement key={item.id} {...item} />)}
                </div>
                <div className={'container_words_word'}>
                    <div className={'container_words_word_item'}>
                        {words.map((item: WordType) => (
                            <Word
                                id={item._id}
                                key={item._id}
                                {...item}
                                deleteWord={() => dispatch(fetchDeleteWord({id: item._id || '', word: item.word}))}
                            />
                        ))}
                    </div>
                    <div className='container_words_pagination'>
                        <div className='container_words_pagination_showing'>Showing {showing()} words
                            of {totalWords} Results
                        </div>
                        <div>
                            <button onClick={handlerButtonPrevious}>&#171;</button>
                            <div>{arr.length>1&&arr.map(item => <Pagination
                                click={() => handlerCurrentPagination(item)}
                                isActive={item === current}
                                id={item}/>)}<p
                                onClick={() => handlerCurrentPagination(arr.length)}>... {arr.length>1&&arr.length}</p></div>
                            <button onClick={handlerButtonNext}>&#187;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
