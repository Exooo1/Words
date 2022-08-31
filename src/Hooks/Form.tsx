import {ChangeEvent, useState} from "react";

type FormType = {
    name: string
    surname: string
    email: string
    password: string
    changeName: (e: ChangeEvent<HTMLInputElement>) => void
    changeSurname: (e: ChangeEvent<HTMLInputElement>) => void
    changeEmail: (e: ChangeEvent<HTMLInputElement>) => void
    changePassword: (e: ChangeEvent<HTMLInputElement>) => void
    reset: () => void
}
export const useForm = (): FormType => {
    console.log('useForm')
    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const changeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const changeSurname = (e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)
    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const reset = () => {
        setName('')
        setSurname('')
        setEmail('')
        setPassword('')
    }
    return {
        name, surname, email, password, changeName, changeEmail, changeSurname, changePassword, reset
    }
}