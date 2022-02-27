import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {counIncement, countDecrement, countIncrementNumber, countDecrementNumber} from 'redux/actions/counterActions'

function Index() {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state.count)
    const [value, setValue] = useState(0)
    return (
        <div>
            Count {count} <br/>
            <button onClick={()=>dispatch(counIncement())}>Increment</button>
            <button onClick={()=>dispatch(countDecrement())}>Decrement</button><br/>
            <input type='number' placeholder='enter number' value={value} onChange={(e)=>setValue(e.target.value)}/> 
            <button onClick={()=>dispatch(countIncrementNumber(value))}>increase</button>
            <button onClick={()=>dispatch(countDecrementNumber(value))}>decrease</button>
        </div>
    )
}

export default Index
