import React, {ChangeEvent, useEffect, useState} from 'react'
import {Word} from './Word/Word'
import './words.scss'
import {useAppDispatch, useAppSelector} from '../../../Redux/ReduxUtils'
import {
    fetchDeleteWord,
    fetchDownloadFile,
    fetchGetWords,
    fetchSortWords,
    fetchWordFind,
} from '../../../Redux/WordsReducer'
import {WordModal} from '../../../Common/ModalComponents/WordModal/WordModal'
import {SortElement} from './SortElements/SortElement'
import {Pagination} from './Pagination/Pagination'
import {profileReselect} from '../../../Redux/Reselect'
import {SortChoice, WordType} from '../../../API/wordAPI'
import {changeTitle} from '../../../Common/usefulFuncs'
import {Loading} from '../../../Common/CommonComponents/Loading/Loading'
import search from '../../../Assets/Images/search.png'

const ArrayButton = React.memo(() => {
    return <div>
        DianaAAAAAAAAAAAAA
    </div>
})

export const Words = () => {
    const [file, setFile] = useState<string>('txt')
    const [find, setFind] = useState<string>('')
    const COUNT_WORDS = 15
    const [current, setCurrent] = useState<number>(1)
    const dispatch = useAppDispatch()
    const {words, totalWords, isLoading} = useAppSelector(profileReselect)
    useEffect(() => {
        changeTitle('Words')
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
        setFind('')
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
        dispatch(fetchSortWords(typeSort))
    }
    const downloadFile = () => {
        dispatch(fetchDownloadFile(file))
    }
    const SortElementComponents = React.memo(() => {
        return <div>
            {sortElements.map(item => {
                return <SortElement
                    sortElem={() => handlerSort(item.name, item.sort)}
                    key={item.id}
                    isLoading={isLoading}
                    {...item}
                />
            })}
        </div>
    })
    const PaginationElements = () => {
        return <div>
            {arr.map((item) => (
                <Pagination
                    key={item}
                    click={() => handlerCurrentPagination(item)}
                    isActive={item === current}
                    id={item}
                />
            ))}
        </div>
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
                    <ArrayButton/>
                </div>
                <div className='container_words_description_two'>
                    <button onClick={() => handlerIsModal(true)}>+ Add new word</button>
                    <div>
                        <img src={search} alt=''/>
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
                    <p>Filters - </p>
                    <SortElementComponents/>
                    <button className='button_reset_filters' onClick={handlerSortReset} disabled={isLoading}>
                        X
                    </button>
                </div>
                <div className={'container_words_word'}>
                    <div className={'container_words_word_item'}>
                        {isLoading ? (
                            <Loading/>
                        ) : (
                            words.map((item: WordType) => (
                                <Word
                                    id={item._id || ''}
                                    key={item._id}
                                    {...item}
                                    deleteWord={() =>
                                        dispatch(fetchDeleteWord({id: item._id || '', word: item.word}))
                                    }
                                />
                            ))
                        )}
                    </div>
                    <div className='container_words_pagination'>
                        <div className='container_words_pagination_showing'>
                            Showing {find.length >= 1 ? words.length : showing()} words of{' '}
                            {find.length >= 1 ? words.length : totalWords} Results
                        </div>
                        <div className='container_words_pagination_logic'>
                            <div>
                                <button onClick={handlerButtonPrevious}>&#171;</button>
                                <div>
                                    {current > 3 && <p onClick={() => setCurrent(1)}>1...</p>}
                                    {arr.length >= 1 &&
                                        <PaginationElements/>}
                                    <p onClick={() => handlerCurrentPagination(resultPagination)}>
                                        ... {arr.length > 1 && resultPagination}
                                    </p>
                                </div>
                                <button onClick={handlerButtonNext}>&#187;</button>
                            </div>
                        </div>
                        <div className='container_words_selectDownload'>
                            <div>
                                <p onClick={downloadFile}>Download File</p>
                                <select value={file} onChange={(e) => setFile(e.target.value)}>
                                    <option value='txt'>.txt</option>
                                    <option value='pdf'>.pdf</option>
                                    <option value='doc'>.doc</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
