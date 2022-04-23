import React, { useState } from 'react'
import './Account.css'


const diffColor = (realValue, recordValue) => {
    if(realValue > recordValue)
        return "red"
    else if (realValue < recordValue)
        return "blue"
    else
        return "green"
}


export default function Account({name, link=""}) {


    const [realValue, setRealValue] = useState('0')
    const [recordValue, setRecordValue] = useState('0')

    var diffClass = diffColor(realValue, recordValue)

    const handleInput = (setter) => {
        return (e) => {
            var intValue = parseInt(e.target.value)
            setter(intValue.toString())
        }
    }

    const resetInput = () => {
        setRecordValue('0')
        setRealValue('0')
    }

    const diff = parseInt(recordValue)-parseInt(realValue)


    const legend = link.length === 0 ?
        <p>{name}</p>:
        <a href={link} target="_blank" rel="noreferrer">{name}</a>





    return (

        <div className="container">
            <h3>{legend}</h3>

            <div>
                <span>紀錄餘額：</span>
                <input
                    type="text"
                    value={realValue}
                    onChange={handleInput(setRealValue)}
                />
            </div>

            <div>
                <span>實際餘額：</span>
                <input
                    type="text"
                    value={recordValue}
                    onChange={handleInput(setRecordValue)}
                />
            </div>

            <div className='control'>
                <span className={diffClass}>差額：{diff}</span>
                <button onClick={resetInput}>歸零</button>
            </div>
        </div>
    )
}
