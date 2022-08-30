import React from 'react'
import {Route, Routes} from "react-router-dom";

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path='auth'>
                    <Route path='registration'/>
                    <Route path='login'/>
                </Route>
            </Routes>
        </div>
    )
}
