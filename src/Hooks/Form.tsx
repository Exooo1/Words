import {ChangeEvent, useCallback, useState} from 'react'
import {useActions} from '../Redux/ReduxUtils'
import info from '../Assets/Images/inform.png'
import {authActions} from "../Redux/AuthReducer";

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
    login: () => void
} & InputType
export const useForm = (): FormType => {
    const {fetchRegistration} = useActions(authActions)
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
        fetchRegistration({name, surname, password, email})
    }
    const login = async () => {
        // if (password.length! < 6) return addHint('Password incorrect')
        // if (!reg.test(email)) return addHint('Invalid Email?')
        // if (reg.test(email)) {
        //     try {
        //         const result = await apiAuth.login({email, password})
        //         window.localStorage.setItem('token', result.data.token)
        //         console.log(result.data.token)
        //     } catch (err) {
        //         console.log(err)
        //     }
        // }
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
        login
    }
}
