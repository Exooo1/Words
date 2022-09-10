import {ChangeEvent, useCallback, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useActions} from '../Redux/ReduxUtils'
import {slice} from '../Redux/ErrorsReducer'
import info from '../Assets/Images/inform.png'

export type InputType = {
    name: string
    surname: string
    email: string
    password: string
}
type ItemProfileType = {
    id: number
    name: string
    change: (e: ChangeEvent<HTMLInputElement>) => void
    type: string
    plc: string
    img: string
}
type FormType = {
    changeName: (e: ChangeEvent<HTMLInputElement>) => void
    changeSurname: (e: ChangeEvent<HTMLInputElement>) => void
    changeEmail: (e: ChangeEvent<HTMLInputElement>) => void
    changePassword: (e: ChangeEvent<HTMLInputElement>) => void
    itemsProfile: Array<ItemProfileType>
    createAccount: () => void
} & InputType
export const useForm = (): FormType => {
    const {addHint} = useActions(slice.actions)
    const redirect = useNavigate()
    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const changeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const changeSurname = (e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)
    const changeEmail = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
        [],
    )
    const changePassword = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
        [],
    )
    const createAccount = () => {
        if (name.length < 1) return addHint('Where is your name?')
        if (surname.length < 1) return addHint('Where is your surname?')
        if (password.length! < 6) return addHint('Password incorrect')
        const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        if (!reg.test(email)) return addHint('Invalid Email?')
        if (reg.test(email)) redirect('/auth/email')
    }
    const itemsProfile: Array<ItemProfileType> = [
        {id: 1, name: name, change: changeName, type: 'text', plc: 'First name', img: info},
        {id: 2, name: surname, change: changeSurname, type: 'text', plc: 'Last name', img: info},
    ]
    return {
        name,
        surname,
        email,
        password,
        changeEmail,
        changePassword,
        itemsProfile,
        changeName,
        changeSurname,
        createAccount,
    }
}
