import React, { useState } from 'react'
import './Account.css'

const inputHandler = (setter) => {
    return (e) => {
        let value = parseInt(e.target.value)
        setter(value)
    }
}

export default function Account({name}) {


    const [realValue, setRealValue] = useState(0)
    const [recordValue, setRecordValue] = useState(0)

    var diffClass = "green"

    if (realValue > recordValue)
        diffClass = "red"
    else if (realValue < recordValue)
        diffClass = "blue"


    return (
        <fieldset className="account">
            <legend>{name}</legend>

            <div className="row">
                <span>帳面餘額：</span>
                <input 
                    type="text" 
                    onInput={inputHandler(setRealValue)}
                />
            </div>
            
            <div className="row">
                <span>實際餘額：</span>
                <input 
                    type="text" 
                    onInput={inputHandler(setRecordValue)}
                />
            </div>
            
            <div className="row">
                <span>差額：</span>
                <span className={diffClass}>{recordValue- realValue}</span>
            </div>

        </fieldset>
    )
}
