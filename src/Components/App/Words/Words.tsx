import React, {ChangeEvent, useEffect, useState} from 'react'
import {Word} from './Word/Word'
import './words.scss'
import {useAppDispatch, useAppSelector} from '../../../Redux/ReduxUtils'
import {
    fetchAddedWords,
    fetchDeleteWord,
    fetchGetWords,
    fetchWordFind,
} from '../../../Redux/WordsReducer'
import {WordModal} from '../../../Common/Modal/WordModal/WordModal'
import {SortElement} from './SortElements/SortElement'
import {Pagination} from './Pagination/Pagination'
import {profileReselect} from '../../../Redux/Reselect'
import {WordType, SortChoice} from '../../../API/wordAPI'

export const Words = () => {
    const [find, setFind] = useState<string>('')
    const COUNT_WORDS = 15
    const [current, setCurrent] = useState<number>(1)
    const dispatch = useAppDispatch()
    const {words, totalWords} = useAppSelector(profileReselect)
    useEffect(() => {
        dispatch(fetchGetWords(current))
    }, [current])
    const resultPagination = Math.ceil(totalWords / COUNT_WORDS)
    const arr: Array<number> = []
    const [timeOut, setTimeOutT] = useState<ReturnType<typeof setTimeout>>()
    const handlerFindWord = (e: ChangeEvent<HTMLInputElement>) => {
        setFind(e.target.value)
        clearTimeout(timeOut)
        if (!e.target.value) {
            dispatch(fetchGetWords(current))
            return
        }
        setTimeOutT(
            setTimeout(() => {
                dispatch(fetchWordFind(e.target.value))
            }, 500),
        )
    }
    const returnArrayPagination = () => {
        const right = () => {
            const result = resultPagination - (current + 2)
            if (result < 0) return resultPagination
            return resultPagination - result
        }
        const left = () => {
            if (current - 1 <= 0) return 0
            if (current - 1 >= 2) return 2
            else return 1
        }
        for (let i = current - left(); i <= right(); i++) {
            arr.push(i)
        }
    }
    returnArrayPagination()
    const [sortElements, setSortElements] = useState<Array<{ id: number; name: string; isActive: boolean; sort: SortChoice }>>([
        {id: 2, name: 'Description', isActive: false, sort: 'DESCRIPTION'},
        {id: 3, name: 'Added', isActive: false, sort: 'ADDED'},
    ])
    const [isModal, setIsModal] = useState<boolean>(false)
    const handlerIsModal = (value: boolean) => setIsModal(value)
    const handlerCurrentPagination = (value: number) => setCurrent(value)
    const handlerButtonNext = () => {
        if (current >= resultPagination) return
        setCurrent((state) => state + 1)
    }
    const handlerButtonPrevious = () => {
        if (current === 1) return
        else setCurrent((state) => state - 1)
    }
    const showing = () => {
        const total = totalWords - current * COUNT_WORDS
        if (total > 0) return current * COUNT_WORDS
        else return current * COUNT_WORDS - Math.abs(total)
    }
    const handlerSortReset = () => {
        setSortElements(sortElements.map((item) => ({...item, isActive: false})))
        dispatch(fetchGetWords(current))
    }
    const handlerSort = (name: string, typeSort: SortChoice) => {
        setSortElements(
            sortElements.map((item) =>
                item.name === name
                    ? {...item, isActive: !item.isActive}
                    : {
                        ...item,
                        isActive: false,
                    },
            ),
        )
        // @ts-ignore
        dispatch(fetchAddedWords(typeSort))
    }
    return (
        <div className='container_words'>
            {isModal && <WordModal handlerIsModal={() => handlerIsModal(false)}/>}
            <div className='container_words_description'>
                <div className='container_words_description_one'>
                    <h1>Words Management</h1>
                    <p>
                        Here, you can manage your words and phrases, update, delete, correct. Add everything you
                        know!
                    </p>
                </div>
                <div className='container_words_description_two'>
                    <button onClick={() => handlerIsModal(true)}>+ Add new word</button>
                    <div>
                        <img src='https://cdn-icons-png.flaticon.com/512/7884/7884209.png' alt=''/>
                        <input
                            value={find}
                            onChange={handlerFindWord}
                            type='text'
                            placeholder='Search by any words'
                        />
                    </div>
                </div>
            </div>
            <div className='container_words_sort'>
                <div className='container_words_sort_buttons'>
                    {sortElements.map((item) => (
                        <SortElement
                            sortElem={() => handlerSort(item.name, item.sort)}
                            key={item.id}
                            {...item}
                        />
                    ))}
                    <button onClick={handlerSortReset}>Reset</button>
                </div>
                <div className={'container_words_word'}>
                    <div className={'container_words_word_item'}>
                        {words.map((item: WordType) => (
                            <Word
                                id={item._id || ''}
                                key={item._id}
                                {...item}
                                deleteWord={() =>
                                    dispatch(fetchDeleteWord({id: item._id || '', word: item.word}))
                                }
                            />
                        ))}
                    </div>
                    <div className='container_words_pagination'>
                        <div className='container_words_pagination_showing'>
                            Showing {find.length >= 1 ? words.length : showing()} words of{' '}
                            {find.length >= 1 ? words.length : totalWords} Results
                        </div>
                        <div>
                            <button onClick={handlerButtonPrevious}>&#171;</button>
                            <div>
                                {current > 3 && <p onClick={() => setCurrent(1)}>1...</p>}
                                {arr.length >= 1 &&
                                    arr.map((item) => (
                                        <Pagination
                                            key={item}
                                            click={() => handlerCurrentPagination(item)}
                                            isActive={item === current}
                                            id={item}
                                        />
                                    ))}
                                <p onClick={() => handlerCurrentPagination(resultPagination)}>
                                    ... {arr.length > 1 && resultPagination}
                                </p>
                            </div>
                            <button onClick={handlerButtonNext}>&#187;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
