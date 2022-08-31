import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './registration.scss'
import {useForm} from "../../../Hooks/Form";

export const Registration = () => {
    const reg = useForm()
    return (
        <div className='reg'>
            <p>START FOR FREE</p>
            <h1>
                Create new account <span>.</span>
            </h1>
            <p>
                Already A Member? <Link to='login'>Log in.</Link>
            </p>
            <div className='reg_profile'>
                <div>
                    <div>
                        {!!reg.name.length && <label>First name</label>}
                        <input
                            value={reg.name}
                            onChange={reg.changeName}
                            type='text'
                            placeholder='First name'
                        />
                    </div>
                    <a>&#128240;</a>
                    {/*<a>&#9993;</a>*/}
                </div>
                <div>
                    <div>
                        {!!reg.surname.length && <label>Last name</label>}
                        <input
                            value={reg.surname}
                            onChange={reg.changeSurname}
                            type='text'
                            placeholder='Last name'
                        />
                    </div>
                    <a>&#128240;</a>
                </div>
            </div>
            <div className='reg_security'>
                <div>
                    <div>
                        {!!reg.email.length && <label>Email</label>}
                        <input
                            value={reg.email}
                            onChange={reg.changeEmail}
                            type='text'
                            placeholder='Email'
                        />
                    </div>
                    <a>&#9993;</a>
                </div>
                <div>
                    <div>
                        {!!reg.password.length && <label>Password</label>}
                        <input
                            value={reg.password}
                            onChange={reg.changePassword}
                            type='text'
                            placeholder='Password'
                        />
                    </div>
                    <img style={{color: 'white', width: '50px', height: '50px'}}
                         src="https://cdn-icons-png.flaticon.com/512/6624/6624543.png" alt=""/>
                </div>
            </div>
            <div className='reg_create'>
                <button onClick={reg.reset}>Reset</button>
                <button>Create account</button>
            </div>
        </div>
    )
}
