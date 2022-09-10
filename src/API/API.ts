import axios from 'axios'
import {InputType} from "../Hooks/Form";

const instance = axios.create({
    baseURL: 'http://localhost:3000/auth/',
})

const apiAuth = {
    registration(values: InputType) {
        return instance.post('registration', values)
    }
}