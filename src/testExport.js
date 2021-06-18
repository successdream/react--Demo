import React, { useEffect, useState, useCallback } from 'react';
import TestClass from './testClass.js'

export default function() {
    const [time, setTime] = useState(10)
    const [counter, setCounter] = useState(0)
    const data = { val: 1}
    
    const handeleClick = () => {
        let val = counter + 1;
        // setTime(++time)
        // setTime(++counter)
        setCounter(val)
    }
    const modifyDataValue = () => {
        data.val++;
        // console.log(data, 'modifyDataValue')
    }

    useEffect(() => {
        console.log(data.val)
    })

    useCallback(() => {
        console.log(counter, 'counter')
    }, [counter])


    return (
        <div>
            <button onClick={modifyDataValue}> 改变data中的值 </button>
            <div>我是counter中的值{ counter }</div>
            <div>我是time中的值 { time } </div>
            <button onClick={handeleClick}> 设置时间 </button>
            我是testExport.js
            {/* <TestClass counter={counter} time = { time }/> */}
        </div>
    )
}