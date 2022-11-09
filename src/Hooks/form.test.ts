import {fetchLogin, fetchRegistration, InitialStateAuth, slice} from "../Redux/AuthReducer";
import {store} from "../Redux/Store";

type CreateAccountType = {
    name: string
    surname: string
    password: string
    email: string
}
const initialState: InitialStateAuth = {
    auth: 0,
    resultCode: 0,
}
const reducer = slice.reducer
const user = {
    name: 'Vlas',
    surname: 'Maskalenchik',
    email: 'vlasmaskalenchik1998@gmail.com',
    password: 'Vlas20101234'
}
const createAccount = ({name, surname, password, email}: CreateAccountType) => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (name.length < 1) return false
    if (surname.length < 1) return false
    if (password.length! < 6) return false
    if (!reg.test(email)) return false
    return true
}
it('createAccount', () => {
    expect(createAccount(user)).toBeTruthy()
})
it('loginRTK', () => {
    // @ts-ignore
    const result = reducer(initialState, fetchLogin({
        email: 'vlasmaskalenchik1998@gmail.com',
        password: 'Vlas20101234'
    }))
    expect(result).toEqual({auth: 0, resultCode: 0})
})
it('registrationRTK', async () => {
    const result = reducer(initialState, fetchRegistration.fulfilled(1, '', {...user}))
    expect(user.email).toMatch('@')
    expect(result).toEqual({auth: 0, resultCode: 1})
})