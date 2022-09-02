import React, {memo, useState} from "react";
import {useForm} from "../../Hooks/Form";
import eye from '../../Assets/Images/eye.png'
import eye2 from '../../Assets/Images/eyep.png'
import mail from '../../Assets/Images/email.png'

export const FormPassword = memo(({email, password, changePassword, changeEmail}: any) => {
    const [isVisible, setVisible] = useState<boolean>(false)
    const changeVisible = () => setVisible(!isVisible)
    return <>
        <div>
            <div>
                {!!email.length && <label>Email</label>}
                <input
                    value={email}
                    onChange={changeEmail}
                    type='text'
                    placeholder='Email'
                />
            </div>
            <img src={mail} alt={email}/>
        </div>
        <div>
            <div>
                {!!password.length && <label>Email</label>}
                <input
                    value={password}
                    onChange={changePassword}
                    type={isVisible ? 'text' : 'password'}
                    placeholder='Password'
                />
            </div>
            <img onClick={changeVisible} src={isVisible ? eye2 : eye} alt={password}/>
        </div>

    </>
})