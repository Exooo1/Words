import {ChangeEvent, useCallback, useState} from 'react'
import info from '../Assets/Images/inform.png'

type ItemProfileType = {
    id: number
    name: string
    change: (e: ChangeEvent<HTMLInputElement>) => void
    type: string
    plc: string
    img: string
}
type FormType = {
    name: string
    surname: string
    email: string
    password: string
    changeName: (e: ChangeEvent<HTMLInputElement>) => void
    changeSurname: (e: ChangeEvent<HTMLInputElement>) => void
    changeEmail: (e: ChangeEvent<HTMLInputElement>) => void
    changePassword: (e: ChangeEvent<HTMLInputElement>) => void
    itemsProfile: Array<ItemProfileType>
    createAccount: () => void
}
export const useForm = (): FormType => {
    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const changeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const changeSurname = (e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)
    const changeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value), [])
    const changePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value), [])
    const createAccount = () => {
        if (name.length < 1 || surname.length === 0) return console.log('where is your name?')
        if (surname.length < 1 || surname.length === 0) return console.log('where is your surname?')
        if (password.length! < 6) return console.log('Password must be more six symbols')
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!reg.test(email)) return console.log('invalid Email')
        console.log(name,surname,password,email)
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
        changeName,
        changeEmail,
        changeSurname,
        changePassword,
        itemsProfile,
        createAccount
    }
}
